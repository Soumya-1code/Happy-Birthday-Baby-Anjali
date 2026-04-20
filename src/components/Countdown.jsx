import { useEffect, useState } from "react";

export default function Countdown({ next }) {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      next();
      return;
    }

    const timer = setTimeout(() => setCount(count - 1), 1000);
    return () => clearTimeout(timer);
  }, [count, next]); // ✅ fixed

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-purple-100">
      <h1 className="text-6xl font-bold text-purple-600">{count}</h1>

      <img
        src="/teddy.png"
        className="w-28 mt-6 animate-bounce"
        alt="teddy"
      />
    </div>
  );
}