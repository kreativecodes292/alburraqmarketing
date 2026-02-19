import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PropertyProcess() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
    id="ourprocess"
      ref={ref}
      className="w-full bg-[#F7F8FA] py-28 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Our Process Label */}
          <div className="flex flex-col items-start">

            <span className="text-sm text-gray-500 uppercase tracking-widest">
              Our Process
            </span>

            {/* Orange Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              transition={{ duration: 0.6 }}
              className="h-[3px] mt-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
            />

          </div>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-black">
            The Smart Way to
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#717B97]">
            Own Property.
          </h2>

          <p className="mt-6 text-gray-500 text-lg max-w-md leading-relaxed">
            Buying real estate shouldn't feel overwhelming. Our guided journey
            ensures clarity, confidence, and a stress-free transition from
            searching to ownership.
          </p>

          <p className="mt-4 text-gray-500 text-lg max-w-md leading-relaxed">
            From investment planning to final paperwork, we handle complexity
            while you focus on choosing the perfect future for yourself.
          </p>
        </motion.div>

        {/* RIGHT SIDE TIMELINE */}
        <div className="relative pl-10">

          {/* Grey Base Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-gray-300"></div>

          {/* Animated Orange Line */}
          <motion.div
            style={{ height }}
            className="absolute left-4 top-0 w-[2px] bg-gradient-to-b from-orange-500 to-red-500"
          ></motion.div>

          <TimelineStep
            number="01"
            title="Discovery & Planning"
            text="We understand your goals, budget, preferred location and investment mindset."
          />

          <TimelineStep
            number="02"
            title="Property Selection"
            text="We shortlist high-value properties aligned with your lifestyle or ROI goals."
          />

          <TimelineStep
            number="03"
            title="Site Experience"
            text="Visit and experience properties physically before making decisions."
          />

          <TimelineStep
            number="04"
            title="Deal Execution"
            text="We handle negotiation, legal paperwork and transaction clarity."
          />

          <TimelineStep
            number="05"
            title="Ownership Support"
            text="From transfer to documentation — we stay with you till completion."
          />

        </div>

      </div>
    </section>
  );
}



function TimelineStep({ number, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-start gap-6 mb-16"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full border bg-white z-10 font-semibold shadow-sm">
        {number}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-black">
          {title}
        </h3>
        <p className="text-gray-500 mt-2 max-w-md">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
