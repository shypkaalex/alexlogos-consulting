import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    number: "01",
    title: "Recognize the value",
    text: "We uncover the knowledge, judgment, results and relationships that make a person or organization distinctive.",
  },
  {
    number: "02",
    title: "Design the bridge",
    text: "We identify who needs that value, how to express it clearly and which path can carry it to the right people.",
  },
  {
    number: "03",
    title: "Build the infrastructure",
    text: "We create the platform, processes, communication and technology required to make the solution work in the real world.",
  },
];

const journey = [
  ["Discover", "See where your experience holds unique value."],
  ["Blueprint", "Define the audience, form and opportunity."],
  ["Session", "Clarify the direction through a human conversation."],
  ["Build", "Create the infrastructure that brings it to life."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071321] text-white selection:bg-[#d6a94f] selection:text-[#071321]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071321]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Alex Logos Consulting home">
            <Image
              src="/alc-logo-v2.png"
              alt=""
              width={52}
              height={52}
              className="h-11 w-11 object-cover mix-blend-screen"
              priority
            />
            <div className="leading-tight">
              <span className="block font-serif text-base tracking-[0.15em] text-white">ALEX LOGOS</span>
              <span className="block text-[9px] font-semibold tracking-[0.36em] text-[#d6a94f]">CONSULTING</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex" aria-label="Main navigation">
            <a href="#approach" className="transition hover:text-[#e6bd72]">How we work</a>
            <a href="#about" className="transition hover:text-[#e6bd72]">About Les</a>
            <a href="mailto:les@alexlogos.consulting" className="transition hover:text-[#e6bd72]">Contact</a>
            <Link href="/experience-capital" className="rounded-lg bg-[#d6a94f] px-5 py-3 font-bold text-[#071321] transition hover:bg-[#e6bd72]">
              Experience Capital
            </Link>
          </nav>

          <Link href="/experience-capital" className="rounded-lg border border-[#d6a94f]/60 px-3 py-2 text-xs font-bold text-[#e6bd72] md:hidden">
            Free reflection
          </Link>
        </div>
      </header>

      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_35%,rgba(39,78,112,0.26),transparent_35%),radial-gradient(circle_at_15%_20%,rgba(214,169,79,0.08),transparent_27%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.25fr_0.75fr] lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.28em] text-[#d6a94f]">
              Human value · Strategic clarity · Working infrastructure
            </p>
            <h1 className="font-serif text-5xl leading-[1.04] tracking-[-0.035em] text-white sm:text-6xl lg:text-[5.25rem]">
              We build bridges between unique human experience and the people who need it.
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
              Alex Logos Consulting helps experienced professionals recognize the value of what they know, design the right path for sharing it and build the infrastructure that brings it to life.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/experience-capital" className="inline-flex items-center justify-center rounded-lg bg-[#d6a94f] px-7 py-4 font-bold text-[#071321] transition hover:-translate-y-0.5 hover:bg-[#e6bd72]">
                Discover your Experience Capital
                <span className="ml-3" aria-hidden="true">→</span>
              </Link>
              <a href="https://scheduler.zoom.us/les-shypka-alc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-[#d6a94f]/70 hover:text-[#e6bd72]">
                Speak with Les
              </a>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[430px] lg:block" aria-hidden="true">
            <div className="absolute inset-12 rounded-full bg-[#d6a94f]/10 blur-3xl" />
            <Image
              src="/alc-logo-v2.png"
              alt=""
              width={900}
              height={900}
              className="relative h-auto w-full mix-blend-screen"
              priority
            />
          </div>
        </div>
      </section>

      <section id="approach" className="border-y border-white/10 bg-[#0b1928] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6a94f]">Our approach</p>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">From hidden value to a working solution.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              We combine human understanding, strategic design and quiet technological support. The complexity is ours to manage. The authorship and decisions remain yours.
            </p>
          </div>

          <div className="mt-14 grid border-l border-t border-white/10 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.number} className="border-b border-r border-white/10 p-8 lg:p-10">
                <span className="text-sm font-bold text-[#d6a94f]">{pillar.number}</span>
                <h3 className="mt-10 font-serif text-2xl">{pillar.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-[#d6a94f]/25 bg-[#0c1b2c] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6a94f]">Flagship solution</p>
              <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl">Your experience is unique. And someone needs what only you know.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Experience Capital helps transform a lifetime of knowledge, judgment, stories and trusted relationships into consulting, mentoring, authorship, meaningful income or lasting legacy.
              </p>
            </div>
            <Link href="/experience-capital" className="mt-10 inline-flex w-fit items-center rounded-lg bg-[#d6a94f] px-6 py-4 font-bold text-[#071321] transition hover:bg-[#e6bd72]">
              Take the free 7-minute reflection <span className="ml-3">→</span>
            </Link>
          </div>

          <div className="bg-[#f5f0e5] p-8 text-[#18322d] sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#966b32]">A respectful path from recognition to reality</p>
            <div className="mt-8 space-y-1">
              {journey.map(([title, text], index) => (
                <div key={title} className="grid grid-cols-[42px_1fr] gap-4 border-t border-[#18322d]/15 py-5">
                  <span className="font-bold text-[#b9843d]">0{index + 1}</span>
                  <div>
                    <h3 className="font-serif text-xl">{title}</h3>
                    <p className="mt-1 leading-6 text-[#50635e]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[#0b1928] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6a94f]">Technology has one role</p>
          <h2 className="mt-7 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            We do not replace human experience with technology.
          </h2>
          <p className="mx-auto mt-7 max-w-4xl text-xl leading-9 text-slate-300">
            We use technology to remove the complexity between experience and the people who can benefit from it.
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#e6bd72] sm:grid-cols-3">
            <span className="border border-white/10 px-4 py-4">You remain the source</span>
            <span className="border border-white/10 px-4 py-4">You remain the author</span>
            <span className="border border-white/10 px-4 py-4">You remain in control</span>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl border border-[#d6a94f]/35" />
            <Image src="/les-alc.png" alt="Les Shypka" width={700} height={700} className="relative aspect-square w-full rounded-3xl object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6a94f]">The human side of the bridge</p>
            <h2 className="mt-5 font-serif text-4xl sm:text-5xl">Les Shypka</h2>
            <p className="mt-3 text-lg font-semibold text-[#e6bd72]">Founder · Strategic Advisor · Bridge Builder</p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              Les brings 22 years of experience across business, government and civil society. He works directly with people to recognize what is genuinely valuable, clarify what they want to create and make the key decisions that technology cannot make for them.
            </p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="border border-white/10 p-5"><strong className="block font-serif text-2xl text-white">22 years</strong><span className="mt-1 block text-sm text-slate-400">Cross-sector experience</span></div>
              <div className="border border-white/10 p-5"><strong className="block font-serif text-2xl text-white">Human + AI</strong><span className="mt-1 block text-sm text-slate-400">Solution design</span></div>
              <div className="border border-white/10 p-5"><strong className="block font-serif text-2xl text-white">One bridge</strong><span className="mt-1 block text-sm text-slate-400">From clarity to results</span></div>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="https://scheduler.zoom.us/les-shypka-alc" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#d6a94f] px-6 py-4 font-bold text-[#071321] transition hover:bg-[#e6bd72]">Schedule a conversation</a>
              <a href="https://www.linkedin.com/in/les-shypka" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 px-6 py-4 font-semibold transition hover:border-[#d6a94f]/70 hover:text-[#e6bd72]">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-7xl border border-[#d6a94f]/30 bg-[linear-gradient(120deg,#10263a,#0b1928)] px-7 py-14 text-center sm:px-12 lg:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#d6a94f]">A simple first step</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">Discover where your unique experience can create genuine value.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Free · Seven minutes · No technical skills required · No obligation</p>
          <Link href="/experience-capital" className="mt-9 inline-flex rounded-lg bg-[#d6a94f] px-7 py-4 font-bold text-[#071321] transition hover:bg-[#e6bd72]">Discover your Experience Capital</Link>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif tracking-[0.16em] text-white">ALEX LOGOS CONSULTING</p>
            <p className="mt-2">From clarity to results · Powered by LES AION</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <a href="mailto:les@alexlogos.consulting" className="hover:text-[#e6bd72]">les@alexlogos.consulting</a>
            <a href="https://lesshypka.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e6bd72]">Origin</a>
            <a href="https://lesaion.world" target="_blank" rel="noopener noreferrer" className="hover:text-[#e6bd72]">Vision</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
