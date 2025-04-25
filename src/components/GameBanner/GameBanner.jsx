import React from "react";

function GameBanner({ result, numGuesses, answer }) {
  let message = "";
  let tries = "";
  if (result === "happy") {
    message = "Congratulations!";
    tries = `Got it in ${numGuesses} guess${numGuesses > 1 ? "es" : ""}!`;
  } else {
    message = `Sorry, the correct answer is ${answer}`;
    tries = "";
  }
  return (
    <div className={`${result} banner`}>
      <p>
        <strong>{message}</strong> <strong>{tries}</strong>
      </p>
    </div>
  );
}

export default GameBanner;
