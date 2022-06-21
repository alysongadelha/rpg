import React from "react";
import CardInfo from "./CardInfo";

const Cards = () => {
  const data = [
    {
      name: "Alyson",
      clan: "Brujah",
    },
    {
      name: "Luan",
      clan: "Caitif",
    },
  ];
  return (
    <div>
      {data.map((info) => (
        <CardInfo key={info.name} info={info} />
      ))}
    </div>
  );
};

export default Cards;
