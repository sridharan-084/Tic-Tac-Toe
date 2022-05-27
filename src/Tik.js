import React, { useState, useEffect } from "react";
import "./Tik.css";
import Game from "./GameArea";

const Tik = () => {
  const [select, setSelect] = useState(true);
  const [myPlayer, SetMyPlayer] = useState("C");

  useEffect(() => {
    if (myPlayer !== "C") setSelect(false);
  }, [myPlayer]);

  if (select) {
    return (
      <>
        <div className="container border rounded w-50 bg-light mt-5">
          <div className="row h-100 justify-content-center align-items-center">
            <h1 className="col-12 text-center">Select Your Player</h1>
            <div className="row justify-content-around">
              <button
                className="btn btn-dark w-25 mt-3 mb-5 col-2"
                onClick={() => SetMyPlayer("X")}
              >
                Player X
              </button>
              <button
                className="btn btn-dark w-25 mt-3 mb-5 col-2"
                onClick={() => SetMyPlayer("O")}
              >
                Player O
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Game Player={myPlayer}></Game>;
  }
};

export default Tik;
