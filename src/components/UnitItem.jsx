import React from "react";

export default function UnitItem({ state, value, noBorder }) {
  let className = "one-third ";
  if (noBorder) {
    className += "noBorder";
  }
  return (
    <div className={className}>
      <div className="stat">{value}</div>
      <div className="stat-value">{state}</div>
    </div>
  );
}
