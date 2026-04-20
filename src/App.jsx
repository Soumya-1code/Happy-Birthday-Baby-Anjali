import { useState, useRef } from "react";
import Landing from "./components/Landing";
import Countdown from "./components/Countdown";
import Memories from "./components/Memories";
import Surprise from "./components/Surprise";
import MusicToggle from "./components/MusicToggle";

function App() {
  const [step, setStep] = useState(0);
  const audioRef = useRef(null);

  return (
    <div className="relative">
      <audio ref={audioRef} src="/music.mp3" loop />

      <MusicToggle audioRef={audioRef} />

      {step === 0 && <Landing next={() => setStep(1)} audioRef={audioRef} />}
      {step === 1 && <Countdown next={() => setStep(2)} />}
      {step === 2 && <Memories next={() => setStep(3)} />}
      {step === 3 && <Surprise />}
    </div>
  );
}

export default App;