import React, { useEffect } from "react";
import { Carousel } from "../Carousel";
import { Catalogue } from "../Catalogue";
import { Notes } from "../Notes";
import data from "../../utils/schema.json";
import { useState } from "react";

export const Container = () => {
  const [catalogueData, setCatalogueData] = useState<any>(data.catalogue);
  const [noteslData, setNotesData] = useState<any>(data.notes);
  useEffect(() => {
    if(data){
    }
  }, [catalogueData, noteslData]);
  return (
    <>
      <div className="container">
        <div className="container__flex">
          <Carousel title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
          <Catalogue title="Lorem ipsum dolor sit amet, consectetur adipiscing elit." data={catalogueData}/>
        </div>
        <Notes title="Technology & Games" data={noteslData}/>
      </div>
    </>
  );
};
