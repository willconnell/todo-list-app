import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Walk the dog",
      completed: true,
    },
    {
      id: 2,
      text: "Another item",
      completed: false,
    },
    {
      id: 3,
      text: "Something to do",
      completed: true,
    },
  ]);

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
      <Header />
      <Items items={items} onCheck={toggleItem} onClick={deleteItem} />
    </div>
  );
}

export default App;
