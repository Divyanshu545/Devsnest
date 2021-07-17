import { useEffect, useState } from "react";

const Card = () => {
  const [items, setItems] = useState([
    {
      name: "Burger",
      cal: 350,
    },
    {
      name: "Pizza",
      cal: 400,
    },
    {
      name: "Italian Pasta",
      cal: 280,
    },
    {
      name: "Noodles",
      cal: 440,
    },
    {
      name: "Brownie",
      cal: 250,
    },
    {
      name: "Soft Drinks",
      cal: 200,
    },
  ]);

  const del = (i) => {
    const newItems = items.filter((e, index) => index !== i);
    setItems(newItems);
  };

  useEffect(() => {
    if (items.length === 0) {
      alert("Empty! Because someone consumes his Meal");
    }
  }, [items]);

  return (
    <>
      <div className="box">
        <div className="card">
          {items.map((ele, index) => {
            return (
              <div key={index} className="info">
                <div className="names">
                  <h1>{ele.name}</h1>
                  <button className="button" onClick={() => del(index)}>Delete</button>
                </div>
                <h2 className="attribute">You have consumed {ele.cal} cal today</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;