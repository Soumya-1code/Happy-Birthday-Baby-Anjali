import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function Surprise() {
  const message = `Happy Birthday Babu 🌟

Watching you grow has been one of the best things in my life.
You may not realize it, but you make everything better just by being you.

No matter how big you grow, you’ll always be my little sister.
And I’ll always be there to protect you, support you, and annoy you 😄

I love you more than words can explain ❤️`;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  // 🎬 Typewriter effect
  useEffect(() => {
    if (!revealed) return;

    if (index < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [index, revealed]);

  // 🎉 Confetti on reveal
  useEffect(() => {
    if (revealed) {
      confetti({
        particleCount: 250,
        spread: 120,
      });
    }
  }, [revealed]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center px-6">

      {!revealed ? (
        <div
          onClick={() => setRevealed(true)}
          className="cursor-pointer"
        >
          <h1 className="text-2xl animate-pulse">
            Tap to see something special 💖
          </h1>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6 text-pink-400">
            🎉 Happy Birthday Baby Anjali🎂
          </h1>

          <p className="whitespace-pre-line text-lg leading-relaxed">
            {displayedText}
          </p>

          <p className="mt-6 text-sm text-gray-300">
            This website was made just for you 💖
          </p>

          <img
            src="/teddy.png"
            className="w-32 mt-6 animate-bounce"
          />
        </>
      )}
    </div>
  );
}