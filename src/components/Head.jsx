import React, { useEffect, useState } from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

const Head = ({ onMake }) => {
  const [todoText, setTodoText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onMake(todoText);
    setTodoText("");
  };
  return (
    <header>
      <div className="top">
        <p>TODO</p>
        <span>
          <img src={sun} alt="mode-type" />
        </span>
      </div>
      <div className="bottom">
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            aria-label="Enter a todo"
            placeholder="Create a new todo..."
            value={todoText}
            onChange={(e) => {
              setTodoText(e.target.value);
            }}
          />
        </form>
      </div>
    </header>
  );
};

export default Head;
