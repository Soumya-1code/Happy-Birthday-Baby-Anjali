import { useState, useRef } from "react";

export default function Memories({ next }) {
  const images = [
    "/mem1.jpeg",
    "/mem2.jpeg",
    "/mem3.jpeg",
    "/mem4.jpeg",
    "/mem5.jpeg",
    "/mem6.jpeg",
    "/mem7.jpeg",
    "/mem8.jpeg",
    "/mem9.jpeg",
    "/mem10.jpeg",
  ];

  const [selected, setSelected] = useState(null);

  // 📱 Swipe logic
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (diff < -50) {
      next(); // swipe left → next page
    }
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-100 to-pink-100 px-4 py-10 relative overflow-hidden"
    >

      {/* 💕 Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${12 + Math.random() * 20}px`,
            }}
          >
            💕
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 z-10">
        Our Beautiful Memories 💖
      </h1>

      {/* Collage */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl z-10">

        {images.map((img, i) => {
          const isProblemImage =
            img.includes("mem5") || img.includes("mem7");

          return (
            <div
              key={i}
              onClick={() => setSelected(img)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300 bg-white flex items-center justify-center opacity-0 animate-fadeIn"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={img}
                alt="memory"
                className={`w-full h-40 md:h-48 ${
                  isProblemImage
                    ? "object-contain p-2"
                    : "object-cover"
                }`}
              />
            </div>
          );
        })}

      </div>

      {/* Button */}
      <button
        onClick={next}
        className="mt-8 bg-pink-400 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition z-10"
      >
        Continue 💌
      </button>

      {/* Teddy */}
      <img
        src="/teddy.png"
        alt="teddy"
        className="w-24 mt-6 animate-bounce z-10"
      />

      {/* 🔍 Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}