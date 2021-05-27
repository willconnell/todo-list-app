import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import AddItem from "./components/AddItem";

function App() {
  const [addShowing, setAddShowing] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Walk the dog",
      completed: false,
    },
    {
      id: 2,
      text: "Go to the grocery store",
      completed: false,
    },
    {
      id: 3,
      text: "Clean room",
      completed: false,
    },
  ]);

  const toggleAddShowing = () => {
    console.log("toggle add-showing");
    setAddShowing(!addShowing);
  };

  const addItem = (text) => {
    if (text === "") {
      alert("Please enter a task");
    } else {
      const id = Math.floor(Math.random() * 10000) + 1;
      setItems([...items, { id: id, text: text, completed: false }]);
    }
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="container">
      <Header onAdd={toggleAddShowing} showing={addShowing} />
      {addShowing ? <AddItem onSubmit={addItem} /> : ""}

      {items.length === 0 ? (
        <p className="text-center m-3">No Tasks to Show</p>
      ) : (
        <Items items={items} onCheck={toggleItem} onClick={deleteItem} />
      )}
    </div>
  );
}

export default App;
