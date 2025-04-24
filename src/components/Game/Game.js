import React from "react";
import Guess from "../Guess";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [wordList, setWordList] = React.useState([]);

  return (
    <>
      <GuessResults wordList={wordList} />
      <Guess wordList={wordList} setWordList={setWordList} />
    </>
  );
}

export default Game;
