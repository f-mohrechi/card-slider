import React from "react";
import ArrowBtn from "./ArrowBtn";
import Units from "./Units";
import CardImg from "./CardImg";
import CardItem from "./CardItem";

export default function CardBox({ box }) {
  return (
    <div className={`clash-card ${box.name}`}>
      <CardImg src={box.Img} name={box.name} />

      <CardItem
        type={`clash-card__level clash-card__level--${box.name.toLowerCase()}`}
      >
        {box.level}
      </CardItem>
      <CardItem type={"clash-card__unit-name"}>{box.name}</CardItem>
      <CardItem type={"clash-card__unit-description"}>{box.text}</CardItem>

      <Units name={box.name} units={box.units} />
    </div>
  );
}
