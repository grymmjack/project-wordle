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
  const [gameStatus, setGameStatus] = React.useState("running");

  let gameOver = false;
  // Game over because max number of guesses reached or answered correctly
  if (guessList.length === NUM_OF_GUESSES_ALLOWED || gameStatus === "win") {
    gameOver = true;
  }

  // Use useEffect to handle side effects like updating gameStatus
  React.useEffect(() => {
    // Answered correctly, won game
    if (guessList.includes(answer)) {
      setGameStatus("win");
    } else if (gameOver) {
      setGameStatus("lose");
    }
  }, [guessList, gameOver]);

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput
        guessList={guessList}
        setGuessList={setGuessList}
        gameStatus={gameStatus}
      />
      {gameOver && (
        <GameBanner
          result={gameStatus === "win" ? "happy" : "sad"}
          numGuesses={guessList.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
