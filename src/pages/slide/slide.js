import React, { useEffect, useState } from 'react';
import { GET_SLIDE_API } from '../../config';
import SlideCard from './slidecard';
import './slide.scss';

export default function Slide() {
  const [slideInfo, setSlideInfo] = useState([]);
  const [x, setX] = useState(0);
  const [moving, setMoving] = useState(false);
  useEffect(() => {
    fetch(GET_SLIDE_API, {
      method: 'GET',
      headers: { 'Content-type': 'application/json', mode: 'cors' },
    })
      .then(res => res.json())
      .then(data => {
        const newJson = data;
        setSlideInfo(newJson);
      });
    setInterval(() => {
      slideInfo.productSlide && goRight();
    }, 4000);
  }, []);

  const goLeft = () => {
    if (moving) return;
    setX(x => x - 1);
    setMoving(true);
    const popCard = slideInfo.productSlide.pop();
    const newProductSlide = [popCard].concat(slideInfo.productSlide);
    const newSlideInfo = slideInfo;
    newSlideInfo.productSlide = newProductSlide;
    setSlideInfo(newSlideInfo);
    setMoving(false);
    setTimeout(() => {}, 500);
  };

  const goRight = () => {
    if (moving) return;
    setX(x => x + 100);
    setMoving(true);
    const popCard = slideInfo.productSlide.shift();
    const newProductSlide = slideInfo.productSlide.concat([popCard]);
    const newSlideInfo = slideInfo;
    newSlideInfo.productSlide = newProductSlide;
    setSlideInfo(newSlideInfo);
    setMoving(false);
  };

  return (
    <div className="slide-section">
      <div className="slide-showbox">
        <ul className="slide-wrapper">
          <li className="slide-list">
            {slideInfo.productSlide &&
              slideInfo.productSlide.map((imgData, idx) => {
                return (
                  <SlideCard
                    style={{ transform: `translateX(${x}px)` }}
                    key={`${imgData.id}${idx}`}
                    imgUrl={imgData.img_url}
                    title={imgData.title}
                    description={imgData.description}
                  />
                );
              })}
          </li>
        </ul>
      </div>
      <div className="slide-controller">
        <button type="button" className="prev" onClick={goLeft}>
          &lang;
        </button>
        <button type="button" className="next" onClick={goRight}>
          &rang;
        </button>
      </div>
    </div>
  );
}
