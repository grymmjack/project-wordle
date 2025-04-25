import React from "react";

function GuessInput({ guessList, setGuessList }) {
  const [guessInput, setGuessInput] = React.useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess: guessInput });
        setGuessList([...guessList, guessInput]);
        setGuessInput("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guessInput}
        onChange={(event) => {
          setGuessInput(event.target.value.toUpperCase());
        }}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
