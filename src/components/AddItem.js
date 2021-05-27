import { useState } from "react";

const AddItem = (props) => {
  const [itemText, setItemText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <label className="form-label">Task</label>
      <input
        type="text"
        value={itemText}
        placeholder="Enter Task Here"
        className="form-control"
        onChange={(e) => setItemText(e.target.value)}
      ></input>
      <div className="d-grid gap-2">
        <input type="submit" className="btn btn-dark mt-2 mb-3"></input>
      </div>
    </form>
  );
};

export default AddItem;
