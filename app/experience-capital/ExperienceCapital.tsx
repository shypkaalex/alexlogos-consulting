"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./experience-capital.module.css";

type Scores = { advisor: number; mentor: number; author: number; connector: number };
type Answer = { value: string; label: string; scores: Partial<Scores> };
type Question = { id: string; eyebrow: string; title: string; help: string; answers: Answer[] };

const questions: Question[] = [
  { id:"purpose",eyebrow:"What matters now",title:"What would you most like your experience to create?",help:"Choose the answer that feels most important today.",answers:[
    {value:"income",label:"Meaningful additional income",scores:{advisor:3,mentor:1}},
    {value:"active",label:"A reason to stay professionally active",scores:{advisor:1,mentor:2,connector:1}},
    {value:"people",label:"A way to help people coming after me",scores:{mentor:3,author:1}},
    {value:"legacy",label:"A lasting record of what I learned and lived",scores:{author:3,mentor:1}},
  ]},
  { id:"experience",eyebrow:"Your experience",title:"Where does most of your hard-won knowledge come from?",help:"There is no better or worse answer.",answers:[
    {value:"leadership",label:"Leading organizations, teams or major projects",scores:{advisor:3,mentor:1}},
    {value:"craft",label:"A profession, trade or specialist discipline",scores:{advisor:2,mentor:2}},
    {value:"relationships",label:"Building trusted relationships and opening doors",scores:{connector:3,advisor:1}},
    {value:"life",label:"A life journey, transition or challenge others can learn from",scores:{author:2,mentor:2}},
  ]},
  { id:"help",eyebrow:"Evidence of value",title:"How do people already ask for your help?",help:"Think about colleagues, friends, family or professional contacts.",answers:[
    {value:"decisions",label:"They ask what I would do in a difficult situation",scores:{advisor:3}},
    {value:"growth",label:"They ask me to guide, teach or encourage them",scores:{mentor:3}},
    {value:"intro",label:"They ask whom they should speak with",scores:{connector:3}},
    {value:"stories",label:"They ask me to explain how things really happened",scores:{author:3}},
  ]},
  { id:"result",eyebrow:"What you have built",title:"Which source of credibility feels strongest?",help:"Select the one you would be proudest to build on.",answers:[
    {value:"outcomes",label:"Results, decisions or organizations I helped shape",scores:{advisor:3}},
    {value:"people",label:"People whose careers or lives I helped develop",scores:{mentor:3}},
    {value:"network",label:"A trusted network built over many years",scores:{connector:3}},
    {value:"memory",label:"Stories and lessons that should not be lost",scores:{author:3}},
  ]},
  { id:"audience",eyebrow:"Who could benefit",title:"Who would you most enjoy helping?",help:"Your first answer is usually the most useful.",answers:[
    {value:"business",label:"Business owners and organizational leaders",scores:{advisor:3,connector:1}},
    {value:"professionals",label:"Younger professionals in my field",scores:{mentor:3,advisor:1}},
    {value:"families",label:"Families, communities or future generations",scores:{author:2,mentor:2}},
    {value:"institutions",label:"Organizations that need the right people connected",scores:{connector:3,advisor:1}},
  ]},
  { id:"format",eyebrow:"A comfortable format",title:"How would you prefer to share what you know?",help:"We can keep the technology behind the scenes.",answers:[
    {value:"conversation",label:"Private conversations about real decisions",scores:{advisor:3}},
    {value:"guidance",label:"Regular guidance for one person or a small group",scores:{mentor:3}},
    {value:"writing",label:"Recorded conversations turned into writing",scores:{author:3}},
    {value:"introductions",label:"Introductions and participation in selected projects",scores:{connector:3}},
  ]},
  { id:"time",eyebrow:"Protecting your time",title:"How much time would you like this to require?",help:"A valuable practice does not have to become a full-time job.",answers:[
    {value:"two",label:"Up to 2 hours a week",scores:{advisor:1,author:1,connector:2}},
    {value:"five",label:"About 3–5 hours a week",scores:{advisor:2,mentor:2}},
    {value:"ten",label:"About 6–10 hours a week",scores:{advisor:2,mentor:2,author:1}},
    {value:"unsure",label:"I would like help deciding",scores:{advisor:1,mentor:1,author:1,connector:1}},
  ]},
  { id:"readiness",eyebrow:"Starting point",title:"What would make starting feel easy?",help:"We will use this to recommend the right first step.",answers:[
    {value:"clarity",label:"A clear description of the value I can offer",scores:{advisor:2}},
    {value:"structure",label:"A simple structure and someone to guide me",scores:{mentor:1,author:1}},
    {value:"clients",label:"Knowing exactly who needs my experience",scores:{advisor:1,connector:2}},
    {value:"done",label:"Having the writing and technology handled for me",scores:{author:2,connector:1}},
  ]},
  { id:"legacy",eyebrow:"The long view",title:"Five years from now, what would feel most worthwhile?",help:"This helps us distinguish income, involvement and legacy.",answers:[
    {value:"practice",label:"A small, respected advisory practice",scores:{advisor:3}},
    {value:"people",label:"Several people succeeding because I guided them",scores:{mentor:3}},
    {value:"work",label:"A book, memoir or body of knowledge with my name on it",scores:{author:3}},
    {value:"community",label:"A useful network or initiative that I helped bring together",scores:{connector:3}},
  ]},
];

const profiles = {
  advisor:{name:"Trusted Advisor",summary:"Your experience may be most valuable when applied to real decisions.",form:"A focused advisory practice",audience:"leaders or professionals facing situations you have already navigated",first:"Define one costly problem you can help a specific person solve in a 60-minute conversation."},
  mentor:{name:"Experienced Mentor",summary:"Your strongest value may be helping another person grow with confidence.",form:"One-to-one or small-group mentoring",audience:"younger professionals, successors or people entering a transition",first:"Identify the three lessons you wish someone had shared with you earlier."},
  author:{name:"Legacy Author",summary:"Your stories and lessons deserve a durable form that others can use.",form:"A memoir, practical guide or recorded knowledge archive",audience:"future generations, peers, families or professionals in your field",first:"Record one 20-minute story about a decision, turning point or lesson that should not be lost."},
  connector:{name:"Trusted Connector",summary:"The relationships you built may be a rare form of practical capital.",form:"Selected introductions, project participation or network advisory",audience:"organizations and people who need trusted access to the right expertise",first:"Map ten relationships by the problems, industries or opportunities they can responsibly help with."},
} as const;

type ProfileKey = keyof typeof profiles;

export default function ExperienceCapital() {
  const [started,setStarted]=useState(false);
  const [step,setStep]=useState(0);
  const [answers,setAnswers]=useState<Record<string,Answer>>({});
  const [showResult,setShowResult]=useState(false);
  const [submitted,setSubmitted]=useState(false);
  const [sending,setSending]=useState(false);
  const [message,setMessage]=useState("");

  useEffect(()=>{
    const timer=window.setTimeout(()=>{
      const saved=window.localStorage.getItem("les-aion-experience-capital");
      if(saved){ try{ const data=JSON.parse(saved); setAnswers(data.answers??{}); setStep(data.step??0); }catch{} }
    },0);
    return ()=>window.clearTimeout(timer);
  },[]);
  useEffect(()=>{ window.localStorage.setItem("les-aion-experience-capital",JSON.stringify({answers,step})); },[answers,step]);

  const result=useMemo(()=>{
    const scores:Scores={advisor:0,mentor:0,author:0,connector:0};
    Object.values(answers).forEach(answer=>Object.entries(answer.scores).forEach(([key,value])=>{ scores[key as ProfileKey]+=value??0; }));
    const sorted=(Object.entries(scores) as [ProfileKey,number][]).sort((a,b)=>b[1]-a[1]);
    return {primary:sorted[0][0],secondary:sorted[1][1]>=sorted[0][1]-2?sorted[1][0]:null,scores};
  },[answers]);

  function choose(answer:Answer){
    setAnswers(current=>({...current,[questions[step].id]:answer}));
    if(step<questions.length-1) setTimeout(()=>setStep(value=>value+1),180);
    else setTimeout(()=>setShowResult(true),180);
  }

  async function submitContact(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); setSending(true); setMessage("");
    const form=new FormData(event.currentTarget);
    const payload={name:String(form.get("name")??""),email:String(form.get("email")??""),consent:form.get("consent")==="yes",answers:Object.fromEntries(Object.entries(answers).map(([key,value])=>[key,value.label])),result};
    try{
      const response=await fetch("/api/experience-capital",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(payload)});
      const data=await response.json();
      if(!response.ok) throw new Error(data.error??"We could not save your request.");
      setSubmitted(true); setMessage(data.deliveryConfigured?"Your private result has been saved. We will be in touch.":"Your result is ready. Email delivery will be activated before the public launch.");
    }catch(error){setMessage(error instanceof Error?error.message:"Please try again.");}
    finally{setSending(false);}
  }

  const primary=profiles[result.primary];
  const secondary=result.secondary?profiles[result.secondary]:null;

  return <main className={styles.page}>
    <header className={styles.header}><Link href="/" className={styles.brand}>LES AION <span>Experience Capital</span></Link><a href="mailto:les@alexlogos.consulting" className={styles.help}>Prefer a person? Email Les</a></header>

    {!started && !showResult && <>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>A lifetime of experience is a form of capital.</p>
          <h1>Your experience is unique. <em>And someone needs what only you know.</em></h1>
          <p className={styles.lead}>You have gained knowledge, judgment and perspective that cannot be replicated by a course, an algorithm or another person&apos;s career. We help build the bridge between your experience and the people who can benefit from it.</p>
          <div className={styles.heroBenefits}><span>Your knowledge</span><span>Your judgment</span><span>Your stories</span><span>Your trusted relationships</span></div>
          <div className={styles.actions}><button onClick={()=>setStarted(true)} className={styles.primary}>Discover who my experience can help</button><span>Free · 7 minutes · No technical skills required</span></div>
        </div>
        <aside className={styles.promise}><p>The LES AION promise</p><strong>Your experience creates the value.<br/>We help it reach the people who need it.</strong><ul><li>You remain the source</li><li>You remain the author</li><li>You remain in control</li></ul></aside>
      </section>
      <section className={styles.threeReasons}>
        <div className={styles.reasonIntro}><p className={styles.kicker}>This is your Experience Capital</p><h2>Value earned over a lifetime.</h2><p>No one else has lived your professional journey, made the same decisions, built the same relationships or learned the same lessons. Together, they form a kind of value that cannot be copied.</p></div>
        <div className={styles.reasonGrid}>
          <article><span>01</span><h3>Knowledge earned, not learned</h3><p>Understanding developed through real decisions, consequences, challenges and results.</p></article>
          <article><span>02</span><h3>Relationships built on trust</h3><p>A professional network created through years of reliability—not assembled by an algorithm.</p></article>
          <article><span>03</span><h3>Stories only you can tell</h3><p>Context, turning points and lessons that exist nowhere else and should not be lost.</p></article>
        </div>
      </section>
      <section className={styles.bridge}>
        <div className={styles.bridgeHeading}><p className={styles.kicker}>The bridge between experience and need</p><h2>What you know can help someone. We make the connection possible.</h2></div>
        <div className={styles.bridgeMap}>
          <article><span>Your Experience</span><strong>Knowledge<br/>Judgment<br/>Stories<br/>Relationships</strong></article>
          <div className={styles.bridgeCenter}><span>THE LES AION BRIDGE</span><strong>Recognize</strong><i>→</i><strong>Structure</strong><i>→</i><strong>Position</strong><i>→</i><strong>Reach</strong></div>
          <article><span>People Who Need It</span><strong>Clients<br/>Mentees<br/>Readers<br/>Organizations</strong></article>
        </div>
        <div className={styles.technologyStatement}><p>We do not replace your experience with technology.</p><strong>We use technology to remove the complexity between your experience and the people who can benefit from it.</strong><span>Technology works quietly behind the scenes. Your experience remains entirely human.</span></div>
      </section>
      <section className={styles.value}><p className={styles.kicker}>Your Experience Capital can take many forms</p><div className={styles.cards}>{["A focused consulting practice","Mentoring for the next generation","A memoir or practical book","A trusted network that opens doors"].map((item,index)=><article key={item}><span>0{index+1}</span><h2>{item}</h2></article>)}</div></section>
      <section className={styles.blueprint}>
        <div className={styles.blueprintIntro}>
          <p className={styles.kicker}>Your personal Experience Capital Blueprint</p>
          <h2>Not a generic report.<br/><em>A plan built around you.</em></h2>
          <p>The free reflection identifies your starting direction. If you choose to continue, your Blueprint will be created from your answers, professional history, goals, preferred level of involvement and the time you want to protect.</p>
        </div>
        <div className={styles.blueprintDetails}>
          <article><span>01</span><div><h3>Your unique value</h3><p>The knowledge, judgment, results, stories and relationships that distinguish your experience.</p></div></article>
          <article><span>02</span><div><h3>Your best path</h3><p>A personalized route through consulting, mentoring, writing, trusted connections—or a combination.</p></div></article>
          <article><span>03</span><div><h3>Your audience and offer</h3><p>Who may need your experience, what you can offer them and how to describe it clearly.</p></div></article>
          <article><span>04</span><div><h3>Your 30-day beginning</h3><p>A practical first plan designed around your pace, confidence and available time.</p></div></article>
        </div>
        <div className={styles.blueprintNote}><strong>One proven method. A different Blueprint for every person.</strong><span>Every document is reviewed by a human before delivery.</span></div>
      </section>
      <section className={styles.journey}>
        <div className={styles.journeyHeading}><p className={styles.kicker}>We can walk the entire path with you</p><h2>From recognition to real-world value.</h2><p>Begin by discovering where your experience can help. Continue only as far as you choose. At every stage, you remain the decision-maker.</p></div>
        <div className={styles.journeySteps}>
          {[['Discover','Recognize where your experience holds the greatest value.'],['Design','Receive a personal Blueprint shaped around you.'],['Clarify','Work with Les to define the right direction and offer.'],['Build','We create the platform, process and tools around your expertise.'],['Connect','Reach the clients, readers, mentees or organizations who need it.'],['Grow','Develop your work at a pace and scale that feel right to you.']].map(([title,text],index)=><article key={title}><b>{String(index+1).padStart(2,'0')}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
        <div className={styles.journeyPromise}><span>Complete support</span><strong>We help transform your unique Experience Capital into genuine value, meaningful income or lasting legacy.</strong></div>
      </section>
      <section className={styles.respect}><div><p className={styles.kicker}>A simple and respectful beginning</p><h2>You bring the experience. We handle the complexity.</h2></div><p>Begin with a free guided reflection designed to recognize what you already carry and identify who may benefit from it. You remain the author, control every decision and never have to become a technology expert. Nothing is published or shared without your permission.</p><button onClick={()=>setStarted(true)} className={styles.primary}>Discover who my experience can help</button></section>
    </>}

    {started && !showResult && <section className={styles.test}>
      <div className={styles.progressMeta}><span>Experience Capital Reflection</span><span>{step+1} of {questions.length}</span></div>
      <div className={styles.progress}><i style={{width:`${((step+1)/questions.length)*100}%`}}/></div>
      <div className={styles.questionCard}>
        <p className={styles.kicker}>{questions[step].eyebrow}</p><h1>{questions[step].title}</h1><p>{questions[step].help}</p>
        <div className={styles.options}>{questions[step].answers.map(answer=><button key={answer.value} onClick={()=>choose(answer)} className={answers[questions[step].id]?.value===answer.value?styles.selected:""}><span>{answer.label}</span><b>→</b></button>)}</div>
        <div className={styles.testNav}><button disabled={step===0} onClick={()=>setStep(value=>value-1)}>← Back</button><button onClick={()=>{setStarted(false);setStep(0);setAnswers({});window.localStorage.removeItem("les-aion-experience-capital")}}>Start over</button></div>
      </div>
    </section>}

    {showResult && <section className={styles.result}>
      <p className={styles.kicker}>Your Experience Capital direction</p><h1>{primary.name}{secondary?` + ${secondary.name}`:""}</h1><p className={styles.resultLead}>{primary.summary} {secondary?.summary}</p>
      <div className={styles.resultGrid}><article><span>Best starting form</span><h2>{primary.form}</h2></article><article><span>Who may value it</span><h2>{primary.audience}</h2></article><article className={styles.wide}><span>Your first simple step</span><h2>{primary.first}</h2></article></div>
      <div className={styles.nextStep}><div><p className={styles.kicker}>Receive your private summary</p><h2>Keep this result and hear when your personal Blueprint becomes available.</h2><p>The Blueprint is not a standard report. It is built from your experience, goals and preferred next chapter. No mailing lists. No pressure.</p></div>
        {!submitted?<form onSubmit={submitContact}><label>First name<input name="name" autoComplete="given-name" required/></label><label>Email address<input name="email" type="email" autoComplete="email" required/></label><label className={styles.consent}><input name="consent" value="yes" type="checkbox" required/><span>I agree that LES AION may use these answers to prepare my private result and contact me about it.</span></label><button className={styles.primary} disabled={sending}>{sending?"Saving…":"Save my private result"}</button>{message&&<p aria-live="polite" className={styles.formMessage}>{message}</p>}</form>:<div className={styles.thankyou}><strong>Thank you.</strong><p>{message}</p></div>}
      </div>
      <button className={styles.restart} onClick={()=>{setShowResult(false);setStarted(true);setStep(0)}}>Review my answers</button>
    </section>}
    <footer className={styles.footer}><span>Alex Logos Consulting · Powered by LES AION</span><span>Your experience. Your authorship. Your next chapter.</span></footer>
  </main>;
}
