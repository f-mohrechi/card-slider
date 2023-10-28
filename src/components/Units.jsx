import React from "react";
import UnitItem from "./UnitItem";

export default function Units({ units, name }) {
  return (
    <div
      className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}
    >
      {units.map((item, index) => {
        return (
          <UnitItem
            state={item.title}
            value={item.value}
            noBorder={index === units.length - 1}
            key={index}
          />
        );
      })}
    </div>
  );
}
