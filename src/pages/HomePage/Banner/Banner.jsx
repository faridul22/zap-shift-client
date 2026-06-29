import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// import banner image
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
        >
            <div>
                <img src={bannerImg1} />
                <div >
                    <button>Track your percel</button>
                    <button>Be a Rider</button>
                </div>
            </div>
            <div>
                <img src={bannerImg1} />
            </div>
            <div>
                <img src={bannerImg1} />
            </div>
        </Carousel>
    );
};

export default Banner;