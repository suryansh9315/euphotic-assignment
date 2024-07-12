import React from "react";
import Dish from "./Dish";

const Dishes = ({ dishes }) => {
  return (
    <div className="flex gap-10 flex-wrap py-10 px-10">
      {dishes &&
        dishes.map((dish, index) => (
          <div key={index}>
            <Dish dish={dish} />
          </div>
        ))}
    </div>
  );
};

export default Dishes;
