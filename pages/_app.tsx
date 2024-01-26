import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './_app.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          // '--swiper-navigation-color': '#fff',
          // '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="/images/food1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food8.png" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/food1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/food8.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
