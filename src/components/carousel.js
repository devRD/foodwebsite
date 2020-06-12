import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './carousel.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 463, min: 0 },
    items: 1,
    partialVisibilityGutter: 40
  }
};
const images = 
[
"https://images.pexels.com/photos/2903384/pexels-photo-2903384.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
"https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
"https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/36756/food-pizza-roll-baked.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
"https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
"https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

const CarouselRoll = ({ deviceType }) => {
  return (
    <>
      <Carousel
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
      >
        {images.map(items => {
          return (
            <div
               style={{ background: `url(${items})`,
                   width: '100%',
                   backgroundSize: 'cover',
                   backgroundRepeat: 'no-repeat' }}
              className="car"
            >
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default CarouselRoll;

