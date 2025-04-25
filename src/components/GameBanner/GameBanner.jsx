import React from "react";

function GameBanner({ result, numGuesses, answer }) {
  if (result === "happy") {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>{numGuesses} guesses</strong>.
        </p>
      </div>
    );
  } else {
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>;
  }
}

export default GameBanner;
