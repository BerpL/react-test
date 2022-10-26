import React from "react";
import { Item } from "../../interfaces/item.interface";

export const Notes = (props: { title:string, data: any }) => {
  return (
    <div className="notes">
      <h2>{props.title}</h2>
      <div className="notes__container">
        {props.data.map((item: Item, index: number) => (
          <div key={index} className="notes__card">
            <img className="notes__img" src={item.image} alt={item.title} />
            <h3>Section: {item.section}</h3>
            <h3>{item.title}</h3>
            <small>{item.autor}</small>
          </div>
        ))}
      </div>
    </div>
  );
};
