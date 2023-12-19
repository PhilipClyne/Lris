import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "../assets/awardbooks.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./BannerCard.css";

// import required modules
import { EffectCards } from "swiper/modules";
const BannerCard = () => {
  return (
    <div className="banner">
      <img src={banner} alt="" />
      {/* <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
        <SwiperSlide />
      </Swiper> */}
    </div>
  );
};

export default BannerCard;
