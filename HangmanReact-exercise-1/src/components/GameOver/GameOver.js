import React from "react";
// import win from "../../assets/win.gif";
// import lose from "../../assets/lose.gif";

const GameOver = (props) => {
  console.log("* GameOver");
  console.log("- props:", props);
  console.log("- chosenWord:", props.chosenWord);
  console.log("- wordGuessed:", props.wordGuessed);
  const winResult = (
    <div className="win">
      <h2>You won!</h2>
      {/* <img src={win} alt="win" /> */}
    </div>
  );

  const loseResult = (
    <div className="lose">
      <h2>You lost..</h2>
      {/* <img src={lose} alt="lose" /> */}
      <p>The chosen word was: {props.chosenWord}</p>
    </div>
  );

  return props.wordGuessed ? winResult : loseResult;
};

export default GameOver;
