import { useState } from "react";
import Add from "./components/Add";
import Render from "./components/Render";

const App = () => {
  const [items, setItems] = useState([]);

  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      <Add addItem={addItem} />
      {items.length === 0 ? (
        <h3 className="text-center mt-4">
        <em>Start Adding Items</em><br/>
        </h3>
      ) : (
        items.map((item, index) => (
          <Render
            item={item}
            key={index}
            index={index}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
  );
};

export default App;