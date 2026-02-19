import { FiArrowUpRight } from "react-icons/fi";

export default function FeaturedProperties() {
  const projects = [
    // {
    //   img: "https://images.unsplash.com/photo-1600585154340-be6161c7a4b9?auto=format&fit=crop&w=800&q=80",
    //   title: "Paradise Valley",
    //   description: "Modern residential project with lush greenery & premium amenities."
    // },
    {
      img: "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
      title: "Our Model Town",
      description: "Urban living redefined with smart layouts & community spaces."
    },
    // {
    //   img: "https://images.unsplash.com/photo-1572120360610-d971b9b4d2d4?auto=format&fit=crop&w=800&q=80",
    //   title: "Seaside Villas",
    //   description: "Luxury villas with breathtaking sea views & private pools."
    // },
    // {
    //   img: "https://images.unsplash.com/photo-1618222347402-57aab7f3c1f5?auto=format&fit=crop&w=800&q=80",
    //   title: "Urban Heights",
    //   description: "High-rise apartments designed for modern urban living."
    // },
    {
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Gardens",
      description: "Gated community with premium villas surrounded by gardens."
    },
    // {
    //   img: "https://images.unsplash.com/photo-1580584122680-93047aab5b1c?auto=format&fit=crop&w=800&q=80",
    //   title: "Country Estate",
    //   description: "Spacious luxury estate with private gardens and amenities."
    // },
  ];

  return (
    <section className="relative w-full bg-white py-20 px-5 sm:px-8 lg:px-12">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black relative inline-block">
          Featured Luxury Properties
          <span className="text-red-600">.</span>
        </h2>

        {/* Neon Gradient Line */}
        <div className="mt-4 h-2 w-40 mx-auto rounded-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 shadow-neon animate-line-neon"></div>

        <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Explore our handpicked premium properties designed for modern living and smart investments.
        </p>
      </div>

      {/* Infinite Slider */}
      <div className="mt-14 overflow-hidden relative">
        <div className="flex animate-scroll gap-6 w-max">
          {[...projects, ...projects].map((project, i) => (
            <div
              key={i}
              className="min-w-[320px] h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 bg-white flex-shrink-0 relative"
            >
              {/* Image */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay for text + button */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent rounded-b-3xl text-white">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="mt-1 text-sm">{project.description}</p>
                <button className="mt-3 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-1">
                  Explore More <FiArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        /* Neon Gradient Line Animation */
        @keyframes neonSlide {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-line-neon {
          background-size: 200% 100%;
          animation: neonSlide 2s linear infinite alternate;
        }

        /* Neon Glow Shadow */
        .shadow-neon {
          box-shadow: 0 0 10px rgba(255, 69, 0, 0.6),
                      0 0 20px rgba(255, 140, 0, 0.5),
                      0 0 30px rgba(255, 215, 0, 0.4);
        }
      `}</style>
    </section>
  );
}
