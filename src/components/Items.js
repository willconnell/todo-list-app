import React from "react";
import Item from "./Item";

const Items = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <Item
          key={item.id}
          items={item}
          onCheck={props.onCheck}
          onClick={props.onClick}
        />
      ))}
    </>
  );
};

export default Items;
