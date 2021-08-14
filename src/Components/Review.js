import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const NextMove = () => {
    if (index > people.length - 2) {
      return null;
    } else setIndex(index + 1);
  };
  const BackMove = () => {
    if (index === 0) {
      return null;
    } else setIndex(index - 1);
  };
  const RandomMove = () => {
    let ranomNumber = Math.floor(Math.random() * people.length);
    console.log(ranomNumber);
    setIndex(ranomNumber);
  };
  console.log(people);
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="Quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={BackMove}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={NextMove}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={RandomMove}>
        Surprize Me
      </button>
    </article>
  );
};

export default Review;
