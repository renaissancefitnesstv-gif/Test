export default function PlumbingSystemsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">

        <a
          href="/"
          className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]"
        >
          ← Back To Home
        </a>

        <div className="mt-8">
          <h1 className="text-5xl font-bold text-[#D4AF37] md:text-7xl">
            Plumbing Systems
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            Professional plumbing and mechanical coordination focused on
            reliability, clean routing, durability, and high-quality execution
            from rough-in to final finish.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">

          {/* BEFORE */}
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">

            <img
              src="/plumbing-before.png"
              alt="Before plumbing installation"
              className="h-[550px] w-full object-cover"
            />

            <div className="bg-black p-6 text-center">
              <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Before
              </div>
            </div>

          </div>

          {/* AFTER */}
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">

            <img
              src="/plumbing-after.png"
              alt="Finished plumbing system"
              className="h-[550px] w-full object-cover"
            />

            <div className="bg-black p-6 text-center">
              <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                After
              </div>
            </div>

          </div>

        </div>

        <div className="mt-24 max-w-5xl space-y-8 text-lg leading-9 text-stone-300">

          <p>
            Our plumbing systems are designed and installed with a strong
            focus on performance, organization, durability, and long-term
            reliability. Every stage of the process is executed with
            precision, from underground rough-ins to final fixture
            installation.
          </p>

          <p>
            MHZ Construction Group coordinates plumbing layouts,
            drainage systems, water supply routing, and mechanical
            integration to ensure clean execution and dependable
            operation throughout the project.
          </p>

          <p>
            Whether working on residential renovations, commercial
            spaces, or large-scale construction projects, our team
            focuses on efficient workflow, code-conscious installation,
            and polished final presentation.
          </p>

        </div>

        <div className="mt-16">
          <a
            href="tel:5149288466"
            className="inline-block rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-bold text-black transition hover:scale-105"
          >
            Call Now
          </a>
        </div>

      </section>
    </main>
  );
}