export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-6">
          MHZ Construction Group
        </h1>

        <p className="text-lg text-gray-300 mb-10">
          Professional residential and commercial construction services.
          Clean work. Reliable team. Strong results.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white/10 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Renovations</h2>
            <p>Kitchen, bathroom, basement upgrades done right.</p>
          </div>

          <div className="p-6 bg-white/10 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Commercial</h2>
            <p>Professional build-outs and business spaces.</p>
          </div>

          <div className="p-6 bg-white/10 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Exterior</h2>
            <p>Durable exterior work and finishing.</p>
          </div>
        </div>

        <div className="bg-white text-black p-8 rounded-xl max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Request a Quote</h2>

          <form
            action="https://formsubmit.co/nlqp@hotmail.ca"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="_captcha" value="false" />

            <input
              name="name"
              placeholder="Full Name"
              required
              className="p-3 border rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="p-3 border rounded"
            />

            <textarea
              name="message"
              placeholder="Project details..."
              required
              className="p-3 border rounded"
            />

            <button className="bg-black text-white py-3 rounded">
              Send Request
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}