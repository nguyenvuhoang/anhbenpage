import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <img src="assets/img/partners/brand-01.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/brand-02.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/brand-03.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/brand-04.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/brand-05.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/brand-06.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/brand-07.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/brand-08.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/brand-09.png" alt="partners brand" />
        </li>
        <li className="item">
          <img src="assets/img/partners/brand-10.png" alt="partners brand" />
        </li>
      </Slider>
    </ul>
  );
}
