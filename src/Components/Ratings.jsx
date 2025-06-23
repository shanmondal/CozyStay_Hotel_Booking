import React from "react";
import { assets } from "../assets/assets";

const Ratings = ({ rating = 5 }) => {
  return (
    <>
      {Array(5)
        .fill()
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star-ratings"
            className="w-4.5 h-4.5"
          />
        ))}
    </>
  );
};

export default Ratings;
