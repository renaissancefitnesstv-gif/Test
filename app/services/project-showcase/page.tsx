const categories = [
  {
    title: "Plumbing Systems",
    image: "/plumbing-before.png",
    description:
      "Complete plumbing work from rough-in, underground drainage, pipe routing, and final fixture coordination.",
  },
  {
    title: "Interior Renovation",
    image: "/Interior.png",
    description:
      "Clean interior upgrades focused on finish quality, custom features, flooring, stairs, bathrooms, and polished presentation.",
  },
  {
    title: "Mechanical & Plumbing",
    image: "/plumbing-after.png",
    description:
      "Mechanical system coordination with organized copper piping, clean routing, reliable performance, and long-term durability.",
  },
  {
    title: "Site Development",
    image: "/site.png",
    description:
      "Structured site execution with framing, workflow coordination, scheduling, safety, and professional build management.",
  },
];

export default function ProjectShowcasePage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]"
          >
            ← Back To Home
          </a>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-[#D4AF37]">
              MHZ Construction Group
            </p>

            <h1 className="mt-5 text-5xl font-bold md:text-7xl">
              Project Showcase
            </h1>

            <p className="mt-6 text-lg leading-9 text-stone-300">
              A complete look at MHZ Construction Group’s work across plumbing
              systems, interior renovation, mechanical coordination, and site
              development. Each section highlights the planning, execution, and
              finishing standards behind the company’s projects.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03]">
            <img
              src="/services-collage.png"
              alt="MHZ project showcase collage"
              className="w-full object-cover"
            />
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {categories.map((item) => (
              <a
                key={item.title}
                href="#quote"
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[380px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-[#D4AF37]">
                    {item.title}
                  </h2>

                  <p className="mt-5 text-lg leading-9 text-stone-300">
                    {item.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <section className="mt-24 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-[#D4AF37]">
                Built With Discipline
              </h2>
              <p className="mt-6 text-lg leading-9 text-stone-300">
                MHZ focuses on clear planning, strong trade coordination, and
                organized execution. From rough construction to final finish,
                the goal is to deliver work that looks clean, performs properly,
                and lasts.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#D4AF37]">
                Professional Results
              </h2>
              <p className="mt-6 text-lg leading-9 text-stone-300">
                Every project is approached with attention to detail, reliable
                communication, and a high standard of presentation. The result is
                a finished space or system that reflects quality workmanship.
              </p>
            </div>
          </section>

          <div id="quote" className="mt-20 rounded-[32px] border border-[#D4AF37]/30 bg-[#D4AF37]/10 p-10">
            <h2 className="text-4xl font-bold">Start Your Project</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
              Ready to discuss plumbing, interior renovation, mechanical work,
              or site development? Contact MHZ Construction Group today.
            </p>

            <a
              href="tel:5149288466"
              className="mt-8 inline-block rounded-full bg-[#D4AF37] px-10 py-5 text-lg font-bold text-black"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}