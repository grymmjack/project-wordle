import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function putWordInCell(word, answer) {
  if (!word) {
    return range(0, 5, 1).map(() => (
      <span key={crypto.randomUUID()} className="cell"></span>
    ));
  }
  const wordResult = checkGuess(word, answer);
  return wordResult.map(({ letter, status }) => (
    <span key={crypto.randomUUID()} className={`cell ${status}`}>
      {letter}
    </span>
  ));
}

function GuessResults({ guessList, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((value, index) => {
          return (
            <p key={crypto.randomUUID()} className="guess">
              {putWordInCell(guessList[index], answer)}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default GuessResults;
