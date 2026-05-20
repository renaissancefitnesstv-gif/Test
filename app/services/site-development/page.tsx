export default function SiteDevelopmentPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] px-6 py-20 text-white">
      <section className="mx-auto max-w-7xl">
        <a href="/" className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
          ← Back To Home
        </a>

        <div className="mt-8">
          <h1 className="text-5xl font-bold text-[#D4AF37] md:text-7xl">
            Site Development
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            Coordinated site execution focused on workflow, scheduling, safety,
            organization, and professional build management from start to finish.
          </p>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
            <img
              src="/site-before.png"
    
              alt="Before site development"
              className="h-[550px] w-full object-cover"
            />

            <div className="bg-black p-6 text-center">
              <div className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                Before
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03]">
            <img
              src="/site-after.png"
              alt="After site development"
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
            MHZ Construction Group provides site development support with a focus
            on coordination, planning, and clean project execution. From active
            construction zones to structured build progress, every step is
            managed with attention to safety, workflow, and site organization.
          </p>

          <p>
            Our team coordinates trades, materials, scheduling, and field
            activity to keep the project moving efficiently while maintaining a
            professional standard on site.
          </p>

          <p>
            Whether the project involves commercial construction, exterior work,
            or large-scale development, MHZ focuses on reliable execution,
            strong communication, and visible progress from start to completion.
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