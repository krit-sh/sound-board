import React from "react";
import "./Soundboard.css";

function Soundboard() {
  const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

  const stopSongs = () => {
    sounds.forEach((sound) => {
      const song = document.getElementById(sound);
      if (song) {
        song.pause();
        song.currentTime = 0;
      }
    });
  };

  return (
    <div className="soundboard-container">
      {/* Audio elements with correct path */}
      {sounds.map((sound) => (
        <audio key={sound} id={sound} src={`/assets/${sound}.mp3`}></audio>
      ))}

      {/* Buttons */}
      <div className="buttons-container">
        {sounds.map((sound) => (
          <button
            key={sound}
            className="btn"
            onClick={() => {
              stopSongs();
              const audio = document.getElementById(sound);
              if (audio) {
                audio.play().catch((error) =>
                  console.log("Playback error:", error)
                );
              }
            }}
          >
            {sound}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Soundboard;
