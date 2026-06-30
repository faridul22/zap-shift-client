import React from 'react';
import { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromis }) => {
    const reviews = use(reviewsPromis)

    return (
        <div className='my-24'>
            <div className='text-center mb-24'>
                <h3 className='text-5xl text-center font-bold my-8'>Reviews</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis non iusto ut adipisci ipsum vitae officia labore, perspiciatis nulla vel earum doloremque molestiae vero dolorem molestias repellat delectus ea ullam iste. Officiis, enim eos. Adipisci reiciendis esse quae fugiat.</p>
            </div>
            <Swiper
                loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50%',
                    depth: 100,
                    modifier: 1,
                    scale: 0.75,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide>
                        <ReviewCard review={review}></ReviewCard>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;