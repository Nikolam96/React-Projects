import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [count, setCount] = useState(0);

  const showState = () => {
    setTimeout(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 3000);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
      <button onClick={showState}>click me</button>
      <h1>{count}</h1>
    </article>
  );
};

export default Question;
