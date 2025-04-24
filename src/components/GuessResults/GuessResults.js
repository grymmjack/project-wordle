import React from "react";
import { useState } from "react";

function GuessResults({ wordList }) {
  return (
    <div className="guess-results">
      {wordList.map((word, index) => {
        return (
          <p key={crypto.randomUUID()} className="guess">
            {word}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
