import React from "react";
import Hero from "../Components/Hero";
import FeaturedHotels from "../Components/FeaturedHotels";
import ExclusiveOffers from "../Components/ExclusiveOffers";
import Testimonial from "../Components/Testimonial";
import NewsLetters from "../Components/NewsLetters";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedHotels />
      <ExclusiveOffers />
      <Testimonial />
      <NewsLetters />
    </>
  );
};

export default Home;
