import React from "react";
import "./Home.css";
import image0 from "./assets/0.jpg";
import image1 from "./assets/1.jpg";
import image2 from "./assets/2.jpg";
import image3 from "./assets/3.jpg";
import image4 from "./assets/4.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="image-slider-wrapper">
        <div className="image-slider">
          {/* ชุดแรกของภาพ */}
          <img src={image0} alt=" 0 " />
          <img src={image1} alt=" 1" />
          <img src={image2} alt=" 2" />
          <img src={image3} alt="3" />
          <img src={image4} alt=" 4 " />
          {/* ชุดภาพที่ซ้ำกันเพื่อให้วนซ้ำ */}
          <img src={image0} alt=" 0 Duplicate" />
          <img src={image1} alt=" 1 Duplicate" />
          <img src={image2} alt=" 2 Duplicate" />
          <img src={image3} alt=" 3 Duplicate" />
          <img src={image4} alt=" 4 Duplicate" />
        </div>
      </div>
    </div>
  );
};

export default Home;
