export default function InteriorFinishingPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">

        {/* BACK BUTTON */}
        <a
          href="/"
          className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]"
        >
          ← Back To Home
        </a>

        {/* TITLE */}
        <div className="mt-8">
          <h1 className="text-5xl font-bold text-[#D4AF37] md:text-7xl">
            Interior Finishing
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            Premium finishing work focused on detail, craftsmanship,
            flooring, plumbing coordination, vanity installation,
            painting, tile work, and polished final presentation.
          </p>
        </div>

        {/* PROJECT SHOWCASE */}
        <div className="mt-20 space-y-24">

          {/* PROJECT 1 */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              Bathroom Vanity Installation
            </h2>

            <div className="grid gap-8 md:grid-cols-2">

              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
                <img
                  src="/before1.jpeg"
                  alt="Before renovation"
                  className="h-[500px] w-full object-cover"
                />

                <div className="bg-black p-5 text-center">
                  <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    Before
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
                <img
                  src="/after1.jpeg"
                  alt="After renovation"
                  className="h-[500px] w-full object-cover"
                />

                <div className="bg-black p-5 text-center">
                  <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    After
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* PROJECT 2 */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              Plumbing + Wall Preparation
            </h2>

            <div className="grid gap-8 md:grid-cols-2">

              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
                <img
                  src="/before2.jpeg"
                  alt="Before plumbing"
                  className="h-[500px] w-full object-cover"
                />

                <div className="bg-black p-5 text-center">
                  <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    Before
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
                <img
                  src="/after2.jpeg"
                  alt="After plumbing"
                  className="h-[500px] w-full object-cover"
                />

                <div className="bg-black p-5 text-center">
                  <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    After
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* PROJECT 3 */}
          <div>
            <h2 className="mb-8 text-3xl font-bold text-white">
              Final Bathroom Finish
            </h2>

            <div className="grid gap-8 md:grid-cols-2">

              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
                <img
                  src="/before3.jpeg"
                  alt="Before bathroom"
                  className="h-[500px] w-full object-cover"
                />

                <div className="bg-black p-5 text-center">
                  <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    Before
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
                <img
                  src="/after3.jpeg"
                  alt="After bathroom"
                  className="h-[500px] w-full object-cover"
                />

                <div className="bg-black p-5 text-center">
                  <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                    After
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* PARAGRAPHS */}
        <div className="mt-24 max-w-5xl space-y-8 text-lg leading-9 text-stone-300">

          <p>
            MHZ Construction Group delivers professional interior finishing
            services focused on quality craftsmanship, durability,
            organization, and clean execution from start to finish.
          </p>

          <p>
            Every stage of the project is handled with attention to detail,
            including plumbing coordination, framing preparation,
            flooring, vanity installation, tile work, painting,
            and final finishing touches.
          </p>

          <p>
            Our goal is to create spaces that feel modern, functional,
            and professionally built while maintaining clear communication
            and reliable execution throughout the entire process.
          </p>

        </div>

        {/* CALL BUTTON */}
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