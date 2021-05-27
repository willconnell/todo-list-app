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
        <span className="taskItem">
          <span>
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
          </span>
          <FaTimes
            style={{ cursor: "pointer" }}
            onClick={() => props.onClick(props.items.id)}
          />
        </span>
      </div>
    </div>
  );
};

export default Item;
