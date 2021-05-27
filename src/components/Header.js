import React from "react";

const Header = (props) => {
  return (
    <div className="row d-flex justify-content-around m-3">
      <h1 className="col-9">To Do List</h1>
      <button
        onClick={() => props.onAdd()}
        className={
          props.showing ? "col-3 btn btn-danger" : "col-3 btn btn-success"
        }
      >
        {props.showing ? "Close" : "Add"}
      </button>
    </div>
  );
};

export default Header;
