type Submission = {
  name?: string;
  email?: string;
  consent?: boolean;
  answers?: Record<string,string>;
  result?: unknown;
};

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request:Request){
  let submission:Submission;
  try{submission=await request.json();}catch{return Response.json({error:"Invalid request."},{status:400});}
  const name=String(submission.name??"").trim().slice(0,100);
  const email=String(submission.email??"").trim().toLowerCase().slice(0,254);
  if(!name||!emailPattern.test(email)||submission.consent!==true){return Response.json({error:"Please provide your name, a valid email and consent."},{status:400});}

  const record={submittedAt:new Date().toISOString(),name,email,answers:submission.answers??{},result:submission.result??null};
  const webhook=process.env.EXPERIENCE_CAPITAL_WEBHOOK_URL;
  if(webhook){
    const delivered=await fetch(webhook,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(record)});
    if(!delivered.ok)return Response.json({error:"Your result could not be delivered. Please try again."},{status:502});
  }else{
    console.info("Experience Capital submission received",JSON.stringify(record));
  }
  return Response.json({ok:true,deliveryConfigured:Boolean(webhook)});
}
