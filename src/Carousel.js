import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //if at the end of carousel, remove right arrow
  //if at the beginning of carousel, remove left arrow
  let rightArrowClass = "bi bi-arrow-right-circle";
  let leftArrowClass = "bi bi-arrow-left-circle";
  if (currCardIdx === total - 1) rightArrowClass += " hidden";
  if (currCardIdx === 0) leftArrowClass += " hidden";


  //Navigates to next card depending on direction ("forward" or "backward")
  function navCarousel(direction) {
    const nextIdx = direction === "forward" ? currCardIdx + 1 : currCardIdx - 1;
    setCurrCardIdx(nextIdx);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={leftArrowClass}
          onClick={() => navCarousel("backward")}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={rightArrowClass}
          onClick={() => navCarousel("forward")}
        />
      </div>
    </div>
  );
}

export default Carousel;
