import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

// image import
import amazon from '../../../assets/brands/amazon.png'
import casio from '../../../assets/brands/casio.png'
import moonstar from '../../../assets/brands/moonstar.png'
import randstad from '../../../assets/brands/randstad.png'
import star from '../../../assets/brands/star.png'
import { Autoplay } from 'swiper/modules';

const brandLogos = [amazon, casio, moonstar, randstad, star]
const Brands = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
        >
            {
                brandLogos.map((logo, index) => <SwiperSlide key={index}>
                    <img src={logo} alt="" />
                </SwiperSlide>)
            }

        </Swiper>
    );
};

export default Brands;