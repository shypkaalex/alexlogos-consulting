import Image from "next/image";

export default function Home() {
  const services = [
    {
      title: "Strategic Clarity",
      text: "Every successful project begins with clarity. We help clients understand their current situation, define objectives, identify obstacles and uncover opportunities.",
    },
    {
      title: "Strategic Solution Blueprint",
      text: "We transform complexity into a clear, actionable plan including priorities, resources, stakeholders, opportunities and risks.",
    },
    {
      title: "Implementation Support",
      text: "When required, we help clients move from blueprint to reality through our network of partners, experts and organizations.",
    },
  ];

  const steps = ["Clarity", "Blueprint", "Orchestration", "Results"];

  return (
    <main className="min-h-screen bg-[#08111F] text-white">
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-10 w-full max-w-6xl overflow-hidden rounded-3xl">
  <Image
  src="/alc-site-logo.png"
  alt="Alex Logos Consulting"
  width={800}
  height={800}
  className="mx-auto w-full max-w-md md:max-w-md"
  priority
/>
</div>

        
        
        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
          We help people, businesses and organizations transform complex
          challenges into clear strategies, actionable blueprints and measurable
          outcomes.
        </p>

        <p className="mt-8 text-xl font-medium text-[#D4AF37]">
          Human Clarity. AI-Powered Solution Design. Real-World Results.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 text-center text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
          What We Do
        </p>

        <h2 className="mb-14 text-center text-4xl font-bold">
          From complexity to a clear path forward
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-[#101B2D] p-8 shadow-2xl shadow-black/20"
            >
              <div className="mb-6 h-[2px] w-14 bg-[#D4AF37]" />

              <h3 className="mb-4 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
  <p className="mb-8 text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
  HOW IT WORKS
</p>

<div className="flex flex-col items-center justify-center gap-6 text-2xl font-semibold md:flex-row md:text-3xl">
  <span>Clarity</span>

  <span className="text-[#D4AF37]">→</span>

  <span>Strategy</span>

  <span className="text-[#D4AF37]">→</span>

  <span>Partnerships</span>

  <span className="text-[#D4AF37]">→</span>

  <span>Results</span>
</div>

<p className="mt-12 text-sm uppercase tracking-[0.45em] text-[#D4AF37]">
  From Uncertainty to Execution
</p>
</section>

      <section className="bg-[#101B2D] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-8 h-[2px] w-32 bg-[#D4AF37]" />

          <h2 className="mb-8 text-4xl font-bold">Powered by LES AION</h2>

          <p className="mb-8 text-lg leading-8 text-slate-300">
            LES AION is the AI Solution Design Engine developed by Alex Logos
            Consulting. It combines human insight, strategic thinking and AI
            orchestration to accelerate research, analysis, planning and
            solution development.
          </p>

          <p className="mb-4 text-xl text-[#D4AF37] font-medium">
  Human clarity remains at the center of every engagement.
</p>

<div className="mt-10">
  
</div>

          <p className="mb-4 text-xl text-[#D4AF37]">
            Technology serves the mission.
          </p>

          <p className="text-xl text-[#D4AF37] font-medium">
  Results remain the objective.
</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <Image
              src="/les-alc.png"
              alt="Les Shypka"
              width={500}
              height={500}
              className="h-auto w-full max-w-md rounded-3xl object-cover shadow-2xl shadow-black/40"
            />
          </div>

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              Meet the Bridge Builder
            </p>

            <h2 className="mb-4 text-4xl font-bold">Les Shypka</h2>

            <p className="mb-6 text-lg text-[#D4AF37]">
              Founder of Alex Logos Consulting
            </p>

            <p className="mb-6 text-slate-300">
              Bridge Builder | Strategic Advisor | Chief Clarity Officer
            </p>

            <p className="mb-4 leading-8 text-slate-300">
              Les Shypka is a bridge builder with 22 years of experience
              across business, government and civil society.
            </p>

            <p className="mb-4 leading-8 text-slate-300">
              His work focuses on helping people and organizations gain
              clarity, connect the right partners and transform complex
              challenges into actionable solutions.
            </p>

            <p className="leading-8 text-slate-300">
              Through Alex Logos Consulting and the LES AION methodology, he
              helps clients move from uncertainty to strategic direction and
              measurable results.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

  <a
    href="https://www.linkedin.com/in/les-shypka"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl border border-[#D4AF37]/40 px-5 py-3 text-sm font-medium text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
  >
    LinkedIn
  </a>

  <a
    href="mailto:les@alexlogos.consulting"
    className="rounded-xl border border-[#D4AF37]/40 px-5 py-3 text-sm font-medium text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
  >
    Email
  </a>

  <a
    href="https://scheduler.zoom.us/les-shypka-alc"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
  >
    Strategic Clarity Session
  </a>

</div>
<p className="mt-8 text-sm tracking-[0.15em] text-[#D4AF37]/80">
   Your Bridge to the World's Most Exclusive Network 
</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-14 text-center">
        <h3 className="mb-2 text-2xl font-semibold">Alex Logos Consulting</h3>

        <p className="mb-2 text-[#D4AF37]">Powered by LES AION</p>

        <p className="mb-6 text-slate-300">From Clarity to Results</p>

        <p className="text-slate-400">les@alexlogos.consulting</p>
      </footer>
    </main>
  );
}