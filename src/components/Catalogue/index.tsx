import React from "react";
import { FcNext } from "react-icons/all";
import { FcPrevious } from "react-icons/all";
import { Item } from "../../interfaces/item.interface";

export const Catalogue = (props: { data: any, title: string }) => {
  return (
    <div className="catalogue">
      <div className="catalogue__header">
        <div>{props.title}</div>
        <div className="catalogue__actions">
          <button className="catalogue__actions__buttons">
            <FcPrevious />
          </button>
          <button className="catalogue__actions__buttons">
            <FcNext />
          </button>
        </div>
      </div>
      <div className="catalogue__container">
        {props.data.map((item: Item, index:number) => (
          <div key={index} className="catalogue__card">
            <img className="catalogue__img" src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
