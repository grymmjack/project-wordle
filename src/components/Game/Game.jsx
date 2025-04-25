import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Game Components
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameBanner from "../GameBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Hoisted to prop-drill up to Game level to reach other components
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("");

  let gameOver = guessList.length === NUM_OF_GUESSES_ALLOWED;
  // if (guessList.includes(answer)) {
  //   setGameStatus("win");
  // }
  // if (gameOver && gameStatus !== "win") {
  //   setGameStatus("lose");
  // }

  return (
    <>
      {guessList.includes(answer) && setGameStatus("win")}
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput guessList={guessList} setGuessList={setGuessList} />
      {gameOver ? (
        gameStatus === "win" && (
          <GameBanner
            result="happy"
            numGuesses={guessList.length}
            answer={answer}
          />
        )
      ) : (
        <GameBanner
          result="sad"
          numGuesses={guessList.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
