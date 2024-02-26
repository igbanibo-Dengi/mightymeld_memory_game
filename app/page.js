"use client";
import { useState } from "react";

import { PlayScreen, StartScreen } from "@/components/Screen";

function App() {
  const [gameState, setGameState] = useState("start");
  const [difficulty, setDifficulty] = useState(6);

  const start = (newDifficulty) => {
    setDifficulty(newDifficulty);
    setGameState("play");
  };

  switch (gameState) {
    case "start":
      return <StartScreen start={start} />;
    case "play":
      return (
        <PlayScreen end={() => setGameState("start")} difficulty={difficulty} />
      );
    default:
      throw new Error("Invalid game state " + gameState);
  }
}

export default App;
