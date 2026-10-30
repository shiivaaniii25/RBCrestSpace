
function App() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#252923]">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-[#dedbd3]">

        <div>
          <h1 className="text-xl md:text-2xl font-serif font-bold tracking-wide">
            RB CREST SPACE
          </h1>
          <p className="text-[9px] tracking-[3px] mt-1">
            SHAPING SPACES. BUILDING TRUST.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-9 text-sm">
          <a href="#home" className="hover:text-[#a58a56]">Home</a>
          <a href="#about" className="hover:text-[#a58a56]">About</a>
          <a href="#services" className="hover:text-[#a58a56]">Services</a>
          <a href="#contact" className="hover:text-[#a58a56]">Contact</a>
        </div>

        <a
          href="#contact"
          className="hidden md:block border border-[#252923] px-5 py-3 text-xs tracking-widest hover:bg-[#252923] hover:text-white transition"
        >
          LET'S TALK
        </a>

        <a href="#contact" className="md:hidden text-sm border border-[#252923] px-3 py-2">
          Contact
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[650px] md:min-h-[750px] flex items-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(20,25,22,0.78), rgba(20,25,22,0.15)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-7 md:px-20 max-w-4xl text-white py-24">

          <p className="text-xs md:text-sm tracking-[5px] mb-8 text-[#e0c99c]">
            ARCHITECTURE · DESIGN · CONSTRUCTION
          </p>

          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            Building spaces
            <br />
            that inspire
            <br />
            <span className="italic text-[#e0c99c]">living.</span>
          </h2>

          <p className="max-w-lg text-sm md:text-base text-white/80 leading-8 mb-10">
            Thoughtfully designed spaces, carefully crafted structures
            and a commitment to building trust at every step.
          </p>

          <a
            href="#services"
            className="inline-block bg-[#e0c99c] text-[#252923] px-8 py-4 text-xs tracking-widest hover:bg-white transition"
          >
            EXPLORE OUR SERVICES
          </a>

        </div>

        <div className="absolute bottom-8 right-8 text-white/70 text-xs tracking-[3px] hidden md:block">
          SPACES WITH PURPOSE · 01
        </div>
      </section>

      {/* Intro Section */}
      <section id="about" className="px-7 md:px-20 py-24 md:py-32">

        <p className="text-xs tracking-[4px] text-[#9b8050] mb-6">
          WELCOME TO RB CREST SPACE
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            More than structures.
            <br />
            <span className="italic text-[#9b8050]">
              Creating possibilities.
            </span>
          </h2>

          <p className="text-[#77766f] leading-8 text-sm md:text-base">
            At RB CREST SPACE, we believe every space begins with an idea.
            Our approach brings together thoughtful planning, purposeful
            design and quality construction to turn ideas into meaningful
            spaces.
          </p>

        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="bg-[#EAE7DF] px-7 md:px-20 py-24">

        <p className="text-xs tracking-[4px] text-[#9b8050] mb-5">
          WHAT WE DO
        </p>

        <h2 className="font-serif text-4xl md:text-5xl mb-14">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {[
            "Residential Construction",
            "Commercial Construction",
            "Renovation & Remodeling",
            "Architectural Design",
            "Interior Design",
            "Turnkey Construction",
          ].map((service, index) => (
            <div
              key={service}
              className="bg-[#F7F5F0] p-8 md:p-10 min-h-48 flex flex-col justify-between hover:bg-[#252923] hover:text-white transition duration-300"
            >
              <span className="text-xs text-[#a58a56]">
                0{index + 1}
              </span>

              <h3 className="font-serif text-2xl">
                {service}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#252923] text-white px-7 md:px-20 py-24">

        <p className="text-xs tracking-[4px] text-[#e0c99c] mb-6">
          LET'S BUILD SOMETHING MEANINGFUL
        </p>

        <h2 className="font-serif text-4xl md:text-6xl max-w-3xl leading-tight mb-10">
          Have a vision?
          <br />
          Let's bring it to life.
        </h2>

        <a
          href="mailto:hello@rbcrestspace.com"
          className="inline-block border border-[#e0c99c] text-[#e0c99c] px-8 py-4 text-xs tracking-widest hover:bg-[#e0c99c] hover:text-[#252923] transition"
        >
          GET IN TOUCH
        </a>

      </section>

      {/* Footer */}
      <footer className="bg-[#1c201d] text-white/60 px-7 md:px-20 py-8 text-xs flex flex-col md:flex-row justify-between gap-4">

        <p>© 2026 RB CREST SPACE. All rights reserved.</p>

        <p>SHAPING SPACES. BUILDING TRUST.</p>

      </footer>

    </div>
  );
}

export default App;
