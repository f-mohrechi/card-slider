import React, { useEffect, useState } from "react";
import CardBox from "./CardBox";
import ArrowBtn from "./ArrowBtn";

export default function CardSlider() {
  const [boxes, setBoxes] = useState([]);
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/boxes")
      .then((response) => response.json())
      .then((boxes) => setBoxes(boxes));
  }, []);

  const handleNext = () => {
    const current = cursor + 1 < boxes.length ? cursor + 1 : 0;
    setCursor(current);
  };

  const handlePrev = () => {
    const current = cursor - 1 < 0 ? boxes.length - 1 : cursor - 1;
    setCursor(current);
  };

  return (
    <div className="slide-container">
      <div className="wrapper">
        {!boxes.length ? (
          <div>Loading ...!</div>
        ) : (
          <>
            <ArrowBtn handleClick={handlePrev} direction={"prev"} />
            <CardBox box={boxes[cursor]} />
            <ArrowBtn handleClick={handleNext} direction={"next"} />
          </>
        )}
      </div>
    </div>
  );
}
