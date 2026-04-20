export default function Landing({ next, audioRef }) {

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play();

      let vol = 0.2;
      const interval = setInterval(() => {
        if (vol < 1) {
          vol += 0.05;
          audioRef.current.volume = vol;
        } else {
          clearInterval(interval);
        }
      }, 300);
    }

    next();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-pink-200 text-center px-4">

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-600 leading-snug max-w-md">
        Something special is waiting for you… 🎁
      </h1>

      {/* Button */}
      <button
        onClick={handleClick}
        className="mt-8 bg-pink-500 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-2xl shadow-lg hover:scale-105 transition duration-300 text-sm sm:text-base"
      >
        Tap to Begin 💖
      </button>

      {/* Teddy */}
      <img
        src="/teddy.png"
        alt="teddy"
        className="w-28 sm:w-32 md:w-40 mt-10 animate-bounce"
      />

    </div>
  );
}