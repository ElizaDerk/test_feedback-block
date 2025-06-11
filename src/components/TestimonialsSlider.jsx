import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialsSlider.css';

import users from '../users.json';
import TestimonialCard from './TestimonialCard';

export default function TestimonialsSlider() {
    return (
        <div className="container">
            <h1 className="title">
                Voices of Success with Sales Fortuna
            </h1>

            <div className="testimonials-container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-custom-next',
                        prevEl: '.swiper-custom-prev',
                    }}
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="swiper-padding"
                >
                    {users.map((item, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Стрелки вне swiper */}
                <div className="swiper-custom-prev">❮</div>
                <div className="swiper-custom-next">❯</div>
            </div>
        </div >
    );
}
