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

        {/* {guessList.map((word, index) => {
          return (
            <p key={crypto.randomUUID()} className="guess">
              {word}
            </p>
          );
        })}
      </div>
      <div className="guess-results">
        <p className="guess">
          <span className="cell">H</span>
          <span className="cell">E</span>
          <span className="cell">L</span>
          <span className="cell">L</span>
          <span className="cell">O</span>
        </p>
        <p className="guess">
          <span className="cell">T</span>
          <span className="cell">H</span>
          <span className="cell">E</span>
          <span className="cell">R</span>
          <span className="cell">E</span>
        </p>
        <p className="guess">
          <span className="cell">W</span>
          <span className="cell">O</span>
          <span className="cell">R</span>
          <span className="cell">L</span>
          <span className="cell">D</span>
        </p>
        <p className="guess">
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </p>
        <p className="guess">
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </p> */}
      </div>
    </>
  );
}

export default GuessResults;
