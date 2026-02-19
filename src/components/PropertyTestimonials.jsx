import { motion } from "framer-motion";

export default function PropertyTestimonials() {
  return (
    <section className="w-full bg-[#F7F8FA] py-32 px-5 sm:px-8 lg:px-12 overflow-hidden relative">

      {/* Soft Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-200 blur-[140px] opacity-30 rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-300 blur-[140px] opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-24 max-w-xl">

          <span className="text-sm text-gray-500 uppercase tracking-widest">
            Client Experience
          </span>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.6 }}
            className="h-[3px] mt-3 mb-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
          />

          <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
            What Our Clients
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#717B97]">
            Truly Feel.
          </h2>

        </div>

        {/* Asymmetrical Luxury Layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-stretch">

          <LuxuryCard
            text="Their advisory approach gave me clarity I never had before investing."
            name="James Walker"
            role="Property Investor"
            delay={0}
            large
          />

          <LuxuryCard
            text="Everything felt structured, calm and professionally handled."
            name="Emma Collins"
            role="Home Buyer"
            delay={0.2}
          />

          <LuxuryCard
            text="They helped me secure a high-growth property within weeks."
            name="Oliver Smith"
            role="Business Owner"
            delay={0.4}
          />

        </div>

      </div>

    </section>
  );
}



function LuxuryCard({ text, name, role, delay, large }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`relative group ${
        large ? "lg:scale-105" : ""
      }`}
    >

      {/* Glass Card */}
      <div className="relative bg-white/70 backdrop-blur-xl p-10 rounded-[36px] border border-white shadow-xl hover:shadow-2xl transition-all duration-500">

        {/* Orange Glow Hover */}
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-orange-500/0 to-orange-500/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

        {/* Quote Mark */}
        <div className="text-6xl text-orange-500 opacity-20 font-serif leading-none mb-4">
          “
        </div>

        {/* Text */}
        <p className="text-gray-700 text-lg leading-relaxed relative z-10">
          {text}
        </p>

        {/* Footer */}
        <div className="mt-10 flex items-center gap-4 relative z-10">

          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold text-lg shadow-md">
            {name.charAt(0)}
          </div>

          <div>
            <p className="font-semibold text-black">
              {name}
            </p>
            <p className="text-sm text-gray-500">
              {role}
            </p>
          </div>

        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-orange-500 to-red-500 rounded-b-[36px]"></div>

      </div>

    </motion.div>
  );
}
