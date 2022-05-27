import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import "./Tik.css";

const GameArea = ({ Player }) => {
  //console.log(Player);
  const [currPlayer, setCurrPlayer] = useState(Player);
  const [ar, setAr] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [endGame, setEndGame] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [Winner, setWinner] = useState("");

  const CheckForEnd = () => {
    let ok = false;
    for (let i = 1; i <= 9; i++) {
      if (ar[i] === "") {
        ok = true;
      }
    }
    if (!ok) {
      setEndGame(true);
    }
    console.log(ok, isWinner, endGame);
    if (ar[1] !== "" && ar[1] === ar[2] && ar[2] === ar[3]) {
      setEndGame(true);
      setIsWinner(true);
      setWinner(currPlayer);
    }
    if (ar[4] !== "" && ar[4] === ar[5] && ar[5] === ar[6]) {
      setEndGame(true);
      setIsWinner(true);
      setWinner(currPlayer);
    }
    if (ar[7] !== "" && ar[7] === ar[8] && ar[8] === ar[9]) {
      setEndGame(true);
      setIsWinner(true);
      setWinner(currPlayer);
    }
    if (ar[1] !== "" && ar[1] === ar[4] && ar[4] === ar[7]) {
      setEndGame(true);
      setIsWinner(true);
      setWinner(currPlayer);
    }
    if (ar[2] !== "" && ar[2] === ar[5] && ar[5] === ar[8]) {
      setEndGame(true);
      setIsWinner(true);
      setWinner(currPlayer);
    }

    if (ar[3] !== "" && ar[3] === ar[6] && ar[6] === ar[9]) {
      setEndGame(true);
      setIsWinner(true);
      setWinner(currPlayer);
    }
    if (ar[1] !== "" && ar[1] === ar[5] && ar[5] === ar[9]) {
      setEndGame(true);
      setIsWinner(true);
      setWinner(currPlayer);
    }
    if (ar[7] !== "" && ar[7] === ar[5] && ar[5] === ar[3]) {
      setEndGame(true);
      setIsWinner(true);
      setWinner(currPlayer);
    }
  };

  const func = (i) => {
    if (ar[i] === "") {
      let br = ar;
      br[i] = currPlayer;
      setAr(br);
      CheckForEnd();
      if (currPlayer === "X") {
        setCurrPlayer("O");
      } else {
        setCurrPlayer("X");
      }
    }
  };
  if (!endGame) {
    return (
      <>
        <div className="Gamearea">
          <h1>Player {currPlayer}'s turn</h1>
          <div className="container bg-dark  border rounded-3 shadow-lg justify-content-between mt-5">
            <div className="row justify-content-center">
              <button
                className="btn col buttondesign border-2 border-light text-light"
                onClick={() => func(1)}
              >
                {ar[1]}
              </button>
              <button
                className="btn col buttondesign border-2 border-light text-light"
                onClick={() => func(2)}
              >
                {ar[2]}
              </button>
              <button
                className="btn col buttondesign border-2 border-light text-light"
                onClick={() => func(3)}
              >
                {ar[3]}
              </button>
            </div>
            {/* second row here */}
            <div className="row justify-content-center ">
              <button
                className="btn col buttondesign border-2 border-light text-light"
                onClick={() => func(4)}
              >
                {ar[4]}
              </button>
              <button
                className="btn col buttondesign border-2 border-light text-light"
                onClick={() => func(5)}
              >
                {ar[5]}
              </button>
              <button
                className="btn col buttondesign border-2 border-light text-light"
                onClick={() => func(6)}
              >
                {ar[6]}
              </button>
            </div>
            {/* third row here */}
            <div className="row justify-content-center ">
              <button
                className="btn col buttondesign border-2 border-light text-light"
                onClick={() => func(7)}
              >
                {ar[7]}
              </button>
              <button
                className="btn col buttondesign border-2 border-light text-light"
                onClick={() => func(8)}
              >
                {ar[8]}
              </button>
              <button
                className="btn col buttondesign border-2 border-light text-light"
                onClick={() => func(9)}
              >
                {ar[9]}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    if (isWinner) {
      return (
        <>
          <div className="end">
            <div className="message">{Winner} is the winner</div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="end">
            <div className="message">GAME END WITH DRAW</div>
          </div>
        </>
      );
    }
  }
};

export default GameArea;
