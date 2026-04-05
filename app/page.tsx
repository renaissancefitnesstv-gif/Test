<div className="relative min-h-screen bg-black text-white flex items-center">

  {/* Background Image */}
  <img
    src="/hero.jpg"
    className="absolute inset-0 w-full h-full object-cover opacity-40"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6">

    <h1 className="text-5xl md:text-6xl font-bold mb-6">
      Built Right. <br />
      <span className="text-[#D4AF37]">No Shortcuts.</span>
    </h1>

    <p className="text-gray-300 text-lg max-w-xl mb-8">
      Clean work. Reliable team. Strong results. From first call to final walkthrough.
    </p>

    <div className="flex gap-4">
      <button className="bg-[#D4AF37] text-black px-6 py-3 rounded-md font-semibold hover:bg-[#b8962e]">
        Get My Quote
      </button>

      <button className="border border-[#D4AF37] px-6 py-3 rounded-md text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black">
        Call The Team
      </button>
    </div>

  </div>
</div>