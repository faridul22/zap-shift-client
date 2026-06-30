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
            <div className='relative'>
                <img src={bannerImg1} />
                <div className='absolute ms-15 top-[73%] flex gap-5'>
                    <button className='btn bg-primary'>Track your percel</button>
                    <button className='btn btn-outline'>Be a Rider</button>
                </div>
            </div>
            <div className='relative'>
                <img src={bannerImg1} />
                <div className='absolute ms-15 top-[73%] flex gap-5'>
                    <button className='btn bg-primary'>Track your percel</button>
                    <button className='btn btn-outline'>Be a Rider</button>
                </div>
            </div>
            <div className='relative'>
                <img src={bannerImg1} />
                <div className='absolute ms-15 top-[73%] flex gap-5'>
                    <button className='btn bg-primary'>Track your percel</button>
                    <button className='btn btn-outline'>Be a Rider</button>
                </div>
            </div>
        </Carousel>
    );
};

export default Banner;