import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function putWordInCell(word) {
  if (!word)
    return range(0, 5, 1).map(() => (
      <span key={crypto.randomUUID()} className="cell"></span>
    ));
  const letters = word.split("");
  return letters.map((letter) => (
    <span key={crypto.randomUUID()} className="cell">
      {letter}
    </span>
  ));
}

function GuessResults({ guessList }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((value, index) => {
          return (
            <p key={crypto.randomUUID()} className="guess">
              {putWordInCell(guessList[index])}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default GuessResults;
