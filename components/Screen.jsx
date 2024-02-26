import { useState } from "react";
import confetti from "canvas-confetti";
import * as icons from "react-icons/gi";
import { Tile } from "./Tile";

import { useToast } from "@/components/ui/use-toast";
import { Paragraph } from "./prefabs/Tailwind";

export const possibleTileContents = [
  icons.GiHearts,
  icons.GiWaterDrop,
  icons.GiDiceSixFacesFive,
  icons.GiUmbrella,
  icons.GiCube,
  icons.GiBeachBall,
  icons.GiDragonfly,
  icons.GiHummingbird,
  icons.GiFlowerEmblem,
  icons.GiOpenBook,
];

export function StartScreen({ start }) {
  return (
    <>
      <div className="z-50 flex flex-col gap-4 p-5 justify-center items-center text-center py-20 rounded-lg mt bg-pink-500">
        <h2 className="font-semibold text-lg text-white">
          Welcome to Jedi training
        </h2>

        <p className=" text-white text-xs">Choose your level to begin.</p>

        <div className="flex items-center justify-center text-sm flex-col gap-4">
          <button
            onClick={() => start(2)}
            className="px-8 py-2 w-[200px] rounded-full bg-white text-pink-500 focus:ring-2 focus:ring-pink-400 hover:shadow-xl transition duration-200"
          >
            Padawan
          </button>
          <button
            onClick={() => start(4)}
            className="px-8 py-2 w-[200px] rounded-full bg-white text-pink-500 focus:ring-2 focus:ring-pink-400 hover:shadow-xl transition duration-200"
          >
            Master
          </button>
          <button
            onClick={() => start(6)}
            className="px-8 py-2 w-[200px] rounded-full bg-white text-pink-500 focus:ring-2 focus:ring-pink-400 hover:shadow-xl transition duration-200"
          >
            Grand Master
          </button>
          <Paragraph />
        </div>
      </div>
    </>
  );
}

export function PlayScreen({ end, difficulty }) {
  const [tiles, setTiles] = useState(null);
  const [tryCount, setTryCount] = useState(0);
  const { toast } = useToast();

  const getTiles = (tileCount) => {
    // Throw error if count is not even.
    if (tileCount % 2 !== 0) {
      throw new Error("The number of tiles must be even.");
    }

    // Use the existing list if it exists.
    if (tiles) return tiles;

    const pairCount = tileCount / 2;

    // Take only the items we need from the list of possibilities.
    const usedTileContents = possibleTileContents.slice(0, pairCount);

    // Double the array and shuffle it.
    const shuffledContents = usedTileContents
      .concat(usedTileContents)
      .sort(() => Math.random() - 0.5)
      .map((content) => ({ content, state: "start" }));

    setTiles(shuffledContents);
    return shuffledContents;
  };

  const flip = (i) => {
    // Is the tile already flipped? We don’t allow flipping it back.
    if (tiles[i].state === "flipped") return;

    // How many tiles are currently flipped?
    const flippedTiles = tiles.filter((tile) => tile.state === "flipped");
    const flippedCount = flippedTiles.length;

    // Don't allow more than 2 tiles to be flipped at once.
    if (flippedCount === 2) return;

    // On the second flip, check if the tiles match.
    if (flippedCount === 1) {
      setTryCount((c) => c + 1);

      const alreadyFlippedTile = flippedTiles[0];
      const justFlippedTile = tiles[i];

      let newState = "start";

      if (alreadyFlippedTile.content === justFlippedTile.content) {
        confetti({
          ticks: 100,
        });
        newState = "matched";
      }

      // After a delay, either flip the tiles back or mark them as matched.
      setTimeout(() => {
        setTiles((prevTiles) => {
          const newTiles = prevTiles.map((tile) => ({
            ...tile,
            state: tile.state === "flipped" ? newState : tile.state,
          }));

          // If all tiles are matched, the game is over.
          if (newTiles.every((tile) => tile.state === "matched")) {
            setTimeout(end, 3000);

            toast({
              title: "Congratulations.",
              description: "You successfully matched all the tiles.",
            });
          }

          return newTiles;
        });
      }, 1000);
    }

    setTiles((prevTiles) => {
      return prevTiles.map((tile, index) => ({
        ...tile,
        state: i === index ? "flipped" : tile.state,
      }));
    });
  };

  return (
    <div className="z-50 flex flex-col gap-8 justify-center items-center w-[500px]">
      <Paragraph />
      {difficulty === 2 ? (
        <div className="grid grid-cols-2 gap-4 bg-blue-300/50 p-4 rounded-md">
          {getTiles(3 * difficulty).map((tile, i) => (
            <Tile key={i} flip={() => flip(i)} {...tile} />
          ))}
        </div>
      ) : difficulty === 4 ? (
        <div className="grid grid-cols-4 gap-4 bg-blue-300/50 p-4 rounded-md">
          {getTiles(4 * difficulty).map((tile, i) => (
            <Tile key={i} flip={() => flip(i)} {...tile} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 bg-blue-300/50 p-4 rounded-md">
          {getTiles(4 * difficulty).map((tile, i) => (
            <Tile key={i} flip={() => flip(i)} {...tile} />
          ))}
        </div>
      )}

      <div className="flex py-1 px-4 rounded-full border gap-3 bg-blue-500/50 text-gray-700 items-center text-lg font-semi-bold">
        <p className="text-white text-sm font-semibold">Attempts :</p>

        <p className="text-white font-semibold text-base md:text-lg">
          {tryCount}
        </p>
      </div>
    </div>
  );
}
