import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Item = (props) => {
  const [completed, setCompleted] = useState(props.items.completed);

  const completedStyle = {
    textDecoration: "line-through",
    color: "grey",
  };

  return (
    <div className="card m-2">
      <div className="card-body">
        <input
          className="me-3"
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            setCompleted(e.currentTarget.checked);
            props.onCheck(props.items.id);
          }}
        ></input>

        {completed ? (
          <span style={completedStyle}>{props.items.text}</span>
        ) : (
          <span>{props.items.text}</span>
        )}

        <FaTimes onClick={() => props.onClick(props.items.id)} />
      </div>
    </div>
  );
};

export default Item;
