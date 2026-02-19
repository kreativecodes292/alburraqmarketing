export default function ImpactStats() {
  return (
    <section className="w-full bg-white py-20 px-5 sm:px-8 lg:px-12">

      {/* New Top Label */}
      <div className="text-center flex flex-col items-center">
        <div className="flex flex-col items-center mb-6">
          
          {/* Soft Accent Line */}
          <span className="w-10 h-[3px] rounded-full bg-gradient-to-r from-red-500 to-orange-500 mb-3"></span>

          <span className="text-[15px] tracking-widest text-gray-500 font-semibold uppercase">
            Impact
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
          We master the complexity,
        </h2>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#717B97] leading-tight">
          and guarantee scale.
        </h2>
      </div>

      {/* Stats Cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {/* Card 1 */}
        <div className="bg-[#F7F8FA] rounded-[32px] p-12 shadow-sm">
          <h3 className="text-5xl font-semibold text-black">126,000+</h3>
          <p className="mt-3 text-xl font-medium text-[#667085]">
            Developers Trained
          </p>
          <p className="mt-5 text-gray-500 text-[15px] leading-relaxed">
            Led by an industry educator. We don't just follow standards; 
            we set them for the Flutter community.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#F7F8FA] rounded-[32px] p-12 shadow-sm">
          <h3 className="text-5xl font-semibold text-black">100%</h3>
          <p className="mt-3 text-xl font-medium text-[#667085]">
            Delivery Rate
          </p>
          <p className="mt-5 text-gray-500 text-[15px] leading-relaxed">
            We have never failed a deployment. Every project is delivered 
            on time, on budget, and bug-free.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#F7F8FA] rounded-[32px] p-12 shadow-sm">
          <h3 className="text-5xl font-semibold text-black">50+</h3>
          <p className="mt-3 text-xl font-medium text-[#667085]">
            Enterprise Deployments
          </p>
          <p className="mt-5 text-gray-500 text-[15px] leading-relaxed">
            From Ayatum to Truckers. We have shipped complex solutions 
            across Logistics, Fintech, and E-Commerce.
          </p>
        </div>
      </div>

    </section>
  );
}
