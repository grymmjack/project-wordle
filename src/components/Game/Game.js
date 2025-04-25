import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Game Components
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // Hoisted to prop-drill up to Game level to reach other components
  const [guessList, setGuessList] = React.useState([]);

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput guessList={guessList} setGuessList={setGuessList} />
    </>
  );
}

export default Game;
