import React, { useEffect, useState } from "react";
import { FcNext } from "react-icons/all";
import { FcPrevious } from "react-icons/all";
import { Item } from "../../interfaces/item.interface";
import data from "../../utils/schema.json";

export const Carousel = (props: { title:string}) => {

  const [carouselData, setCarouselData] = useState<Item[]>(data.carousel);
  const [selected, setSelected] = useState<Item>(data.carousel[0]);
  const handleActions = (next:boolean) => {
    if(next){
      if(selected.id === '3' ){
        return;
      }
      const nextid = Number(selected.id) + 1
      const temp: any = carouselData.find((item:any) => item.id === String(nextid));
      setSelected(temp);
    } else {
      if(selected.id === '1' ){
        return;
      }
      const nextid = Number(selected.id) - 1
      const temp: any = carouselData.find((item:any) => item.id === String(nextid));
      setSelected(temp);
    }
  }
  useEffect(() => {
    if(data){
      carouselData.map((item:any) => {
        console.log(item)
      })
    }
  }, [selected]);
  return (
    <div className="carousel">
      <div className="carousel__header">
        <div>{props.title}</div>

        <div className="carousel__actions">
          <button onClick={() => handleActions(false)} className="carousel__actions__buttons">
            <FcPrevious />
          </button>
          <button onClick={() => handleActions(true)} className="carousel__actions__buttons">
            <FcNext />
          </button>
        </div>
      </div>
      <div className="carousel__container">
        <div className="carousel__card">
          <img className="carousel__img" src={selected.image} alt={selected.title} />
        </div>
      </div>
    </div>
  );
};
