import React from "react";

export default function CardImg({ src, name }) {
  return (
    <div
      className={`clash-card__image clash-card__image--${name.toLowerCase()}`}
    >
      <img
        src={src}
        // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png"
        alt={name}
      />
    </div>
  );
}
