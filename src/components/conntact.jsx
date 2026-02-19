import { motion } from "framer-motion";

export default function Conntact() {
  return (
    <div id="contact" className="w-full bg-white text-gray-900 min-h-screen px-6 lg:px-24 pt-36 pb-32">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">

        {/* ================= LEFT SIDE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="uppercase tracking-widest text-sm text-orange-500 font-semibold">
            Book a Private Consultation
          </p>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight">
            Let’s Collaborate <br />
            On Your <span className="text-orange-500">Next Investment</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-md">
            Whether you're searching for a luxury residence or a high-return
            real estate opportunity, our expert advisors are here to guide you.
          </p>

          {/* Divider */}
          <div className="w-20 h-1 bg-orange-500 mt-8 rounded-full"></div>

          {/* Contact Details */}
          <div className="mt-14 space-y-8">

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500">
                Call Us
              </p>
              <h3 className="text-2xl font-bold mt-1">
                +44 (7456) 285429
              </h3>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500">
                Email
              </p>
              <h3 className="text-2xl font-bold mt-1">
                sales@paradisevalley.com
              </h3>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Reach out via email or schedule a call with our property
              specialists. We ensure complete transparency and professional
              guidance throughout your buying journey.
            </p>

          </div>
        </motion.div>


        {/* ================= RIGHT SIDE FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Name"
            className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />

          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Company name"
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>

          <select className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition">
            <option>Select Investment Budget</option>
            <option>$200k - $300k</option>
            <option>$300k - $500k</option>
            <option>$500k+</option>
          </select>

          <textarea
            rows="5"
            placeholder="Tell us about your property requirements..."
            className="w-full px-6 py-4 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          ></textarea>

          <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold shadow-lg transition">
            Submit Inquiry
          </button>

        </motion.div>

      </div>

    </div>
  );
}
