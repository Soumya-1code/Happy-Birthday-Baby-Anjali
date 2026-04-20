export default function MusicToggle({ audioRef }) {

  const toggle = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 bg-white p-2 rounded-full shadow"
    >
      🔊
    </button>
  );
}
