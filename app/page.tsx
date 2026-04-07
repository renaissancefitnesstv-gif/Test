export default function Home() {
  const residentialServices = [
    {
      title: "Bathroom Remodeling & Renovation",
      description:
        "Full design-and-build support including custom showers, vanities, tile work, plumbing updates, and clean finish coordination.",
    },
    {
      title: "Kitchen Renovations",
      description:
        "Functional kitchen upgrades with cabinetry, countertops, lighting, and finish coordination for daily use.",
    },
    {
      title: "Basement Finishing",
      description:
        "Convert underused basement space into clean, code-conscious living or utility zones.",
    },
    {
      title: "Exterior Improvements",
      description:
        "Durability-focused exterior updates, repairs, and finishing work for long-term value.",
    },
  ];

  const commercialServices = [
    {
      title: "Office Renovations & Build-Outs",
      description:
        "Turn empty or outdated spaces into modern, functional work environments.",
    },
    {
      title: "Retail & Client-Facing Spaces",
      description:
        "Design-conscious build programs focused on brand presentation and customer flow.",
    },
    {
      title: "Multi-Trade Coordination",
      description:
        "Coordinated scheduling and execution across trade scopes to reduce downtime.",
    },
    {
      title: "Lifecycle Upgrades",
      description:
        "Practical upgrades for operational durability, safety, and long-term maintenance value.",
    },
  ];

  const trustPoints = [
    "Clean Interior Finishing",
    "Plumbing + Mechanical Coordination",
    "One Coordinated Team",
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src="/logo.png"
              alt="MHZ logo"
              className="h-12 w-12 rounded-md border border-white/10 object-cover md:h-14 md:w-14"
            />
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold tracking-wide md:text-base">
                MHZ Construction Group
              </div>
              <div className="truncate text-[10px] uppercase tracking-[0.22em] text-stone-400 md:text-xs md:tracking-[0.25em]">
                Reliable People. Remarkable Spaces.
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#team" className="hover:text-white">
              Team
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#quote" className="hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#quote"
            className="rounded-xl border border-[#D4AF37] bg-[#D4AF37]/10 px-3 py-2 text-xs font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black md:px-4 md:text-sm"
          >
            Start My Quote
          </a>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <img
            src="/hero.png"
            alt="MHZ construction hero"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-6 md:py-28">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] sm:text-xs">
                Residential &amp; Commercial Construction
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
                Built Right.
                <br />
                <span className="text-[#D4AF37]">No Shortcuts.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg sm:leading-8">
                Precision-built residential and commercial construction with
                direct communication from first call to final walkthrough.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#quote"
                  className="rounded-xl bg-[#D4AF37] px-6 py-3 text-center font-semibold text-black shadow-lg transition hover:scale-[1.02] hover:opacity-90"
                >
                  Get My Quote
                </a>
                <a
                  href="tel:5149288466"
                  className="rounded-xl border border-[#D4AF37] px-6 py-3 text-center font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
                >
                  Call The Team
                </a>
              </div>
            </div>

            <div className="grid gap-4 self-end">
              {trustPoints.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-stone-200 shadow-xl backdrop-blur sm:px-5 sm:py-5 sm:text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/Interior.png"
                alt="Interior finishing"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  Interior Finishing
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/service-plumbing.png"
                alt="Plumbing systems"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  Plumbing Systems
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/site.png"
                alt="Construction site"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
                  Site Development
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
          <div className="rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-br from-white/5 via-white/[0.03] to-[#D4AF37]/5 p-6 md:p-12">
            <div className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-400">
              Start With A Clear Plan
            </div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
              Simple process. Direct communication. No wasted steps.
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "Residential and commercial project support.",
                "Scope-first consultations based on your priorities.",
                "One team from estimate through completion.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-black/60 p-6 text-lg leading-8 text-stone-100 ring-1 ring-white/5 md:text-xl md:leading-9"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:5149288466"
                className="rounded-xl bg-slate-700/70 px-6 py-4 text-center font-bold uppercase tracking-[0.16em] text-white transition hover:bg-slate-600/70"
              >
                Call The Team
              </a>
              <a
                href="#quote"
                className="rounded-xl border border-[#D4AF37] px-6 py-4 text-center font-bold uppercase tracking-[0.16em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
              >
                Start My Quote
              </a>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24"
        >
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                About Us
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#D4AF37] md:text-6xl">
                At MHZ, construction is planning, discipline, and craft under
                pressure.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-stone-300 md:text-lg md:leading-9">
              <p>
                We deliver residential and commercial projects through clear
                scopes, direct communication, and execution detail that holds up
                long after handoff.
              </p>
              <p>
                From early estimates to final walkthrough, one accountable team
                stays aligned with your goals, timeline, and standards.
              </p>
            </div>
          </div>
        </section>

        <section
          id="team"
          className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24"
        >
          <div className="mb-10">
            <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              Leadership Team
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-6xl">
              The people behind MHZ Construction Group.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
              A coordinated team focused on execution, communication, and
              professional results from planning to final walkthrough.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/Xavier Manhertz.jpeg"
                alt="Xavier Manhertz"
                className="h-[420px] w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Xavier Manhertz
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#9BB7E8]">
                  Founder &amp; Chief Executive Officer
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  Leads the company vision, sets the standard for execution, and
                  drives the quality and professionalism behind every project.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/Jonas.jpeg"
                alt="Jonas Manhertz"
                className="h-[420px] w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Jonas Manhertz
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#9BB7E8]">
                  Director of Commercial Operations
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  Oversees commercial execution, coordination, and delivery with
                  a strong focus on organization, consistency, and results.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/Philip Deangelis.jpeg"
                alt="Philip Deangelis"
                className="h-[420px] w-full object-cover object-top"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">
                  Philip Deangelis
                </h3>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#9BB7E8]">
                  Project Manager
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  Manages field activity, crews, and workflow to keep projects
                  moving smoothly from layout to final completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] p-6 md:p-10">
              <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Residential Services
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-[#D4AF37] md:text-6xl">
                Homes planned around your daily life, goals, and long-term
                value.
              </h2>

              <div className="mt-6 rounded-2xl bg-black/60 p-6">
                <div className="text-2xl font-semibold text-[#D4AF37]">
                  Friendly faces, flawless service.
                </div>
                <div className="mt-2 text-xl text-stone-300">
                  Because home should always feel right.
                </div>
              </div>

              <div className="mt-8 space-y-6">
                {residentialServices.map((service) => (
                  <div key={service.title}>
                    <h3 className="text-xl font-bold uppercase text-stone-100 md:text-2xl">
                      {service.title}
                    </h3>
                    <div className="mt-3 rounded-2xl bg-black/60 p-6 text-lg leading-8 text-stone-300 md:text-xl md:leading-9">
                      {service.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#D4AF37]/20 bg-white/[0.03] p-6 md:p-10">
              <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Commercial Services
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-[#D4AF37] md:text-6xl">
                Operationally aware build programs for business-critical spaces.
              </h2>

              <div className="mt-6 rounded-2xl bg-black/60 p-6">
                <div className="text-2xl font-semibold text-[#D4AF37]">
                  Excellence you can count on.
                </div>
                <div className="mt-2 text-xl text-stone-300">
                  We mean business about your business.
                </div>
              </div>

              <div className="mt-8 space-y-6">
                {commercialServices.map((service) => (
                  <div key={service.title}>
                    <h3 className="text-xl font-bold uppercase text-stone-100 md:text-2xl">
                      {service.title}
                    </h3>
                    <div className="mt-3 rounded-2xl bg-black/60 p-6 text-lg leading-8 text-stone-300 md:text-xl md:leading-9">
                      {service.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24"
        >
          <div className="mb-8">
            <div className="text-sm uppercase tracking-[0.3em] text-stone-400">
              Portfolio
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-[#D4AF37] md:text-6xl">
              Interiors. Mechanical. Full build execution.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300 md:text-lg">
              Selected work that reflects the range of MHZ Construction Group,
              from premium interior finishes to plumbing systems and active site
              development.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/plumbing-project.jpeg"
                alt="Plumbing system installation"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Plumbing Systems</h3>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  Complete bathroom build from the ground up. Full plumbing
                  system installed with proper drainage routing, structural
                  prep, and execution built for long-term performance.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/Interior.png"
                alt="Interior renovation project"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Interior Renovation</h3>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  Refined interior construction focused on finish quality,
                  custom features, and a polished final presentation.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/Plumbing.png"
                alt="Plumbing and mechanical work"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  Mechanical &amp; Plumbing
                </h3>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  Technical plumbing and mechanical execution focused on clean
                  routing, reliable performance, and long-term durability.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]">
              <img
                src="/site.png"
                alt="Site development project"
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-80"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Site Development</h3>
                <p className="mt-4 text-lg leading-8 text-stone-300">
                  Structured site execution with coordinated trades, organized
                  workflow, and attention to schedule, safety, and finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="quote"
          className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-24"
        >
          <div className="rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 via-white/[0.03] to-black p-8 md:p-12">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Get My Quote
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-6xl">
                Let’s talk about your next project.
              </h2>
              <p className="mt-6 text-base leading-8 text-stone-300 md:text-lg">
                Tell us what you need and our team will get back to you.
              </p>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <form
  action="https://formspree.io/f/xojprpej"
  method="POST"
  className="space-y-4 rounded-2xl border border-white/10 bg-black/50 p-6"
>
  <input
    type="text"
    name="name"
    placeholder="Full Name"
    required
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-400"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-400"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-400"
  />

  <textarea
    name="message"
    placeholder="Tell us about your project"
    rows={5}
    required
    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-stone-400"
  />

  <button
    type="submit"
    className="w-full rounded-xl bg-[#D4AF37] px-6 py-3 font-semibold text-black transition hover:opacity-90"
  >
    Send Request
  </button>
</form>

              <div className="space-y-6">
                <a
                  href="tel:5149288466"
                  className="block rounded-2xl border border-white/10 bg-black/50 p-6 transition hover:border-[#D4AF37]/40"
                >
                  <div className="text-sm uppercase tracking-[0.25em] text-stone-400">
                    Phone
                  </div>
                  <div className="mt-3 text-2xl font-semibold text-white">
                    (514) 928-8466
                  </div>
                </a>

                <a
                  href="mailto:info@mhzconstructiongroup.com?subject=Project Inquiry&body=Full Name:%0D%0APhone:%0D%0AProject Details:"
                  className="block rounded-2xl border border-white/10 bg-black/50 p-6 transition hover:border-[#D4AF37]/40"
                >
                  <div className="text-sm uppercase tracking-[0.25em] text-stone-400">
                    Email
                  </div>
                  <div className="mt-3 break-all text-2xl font-semibold text-white">
                    info@mhzconstructiongroup.com
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="tel:5149288466"
        className="fixed bottom-6 right-6 rounded-full bg-[#D4AF37] px-5 py-3 font-bold text-black shadow-xl transition hover:scale-105"
      >
        Call Now
      </a>
    </div>
  );
}