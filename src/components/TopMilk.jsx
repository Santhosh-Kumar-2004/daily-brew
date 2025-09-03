import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/TopMilk.css'
import { FaHeart, FaThumbsUp } from 'react-icons/fa'

// Example milkshake data
import milk1 from '../assets/milk1.jpg'
import milk2 from '../assets/milk2.jpg'
import milk3 from '../assets/milk3.jpg'
import milk4 from '../assets/milk4.jpg'
import milk5 from '../assets/milk5.jpg'

const TopMilkshakes = () => {
  const milkshakes = [
    { id: 1, name: 'Strawberry Shake', image: milk1, likes: 120, price: 5 },
    { id: 2, name: 'Chocolate Shake', image: milk2, likes: 200, price: 6 },
    { id: 3, name: 'Vanilla Shake', image: milk3, likes: 95, price: 4 },
    { id: 4, name: 'Oreo Shake', image: milk4, likes: 150, price: 7 },
    { id: 5, name: 'Mint Shake', image: milk5, likes: 80, price: 5 },
  ]

  return (
    <section className="top-milkshakes" id="milkshakes">
      <h2 className="section-title">Top Milkshakes</h2>
      <p className="section-subtitle">Delicious milkshakes loved by everyone</p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        navigation
        className="milkshake-swiper"
      >
        {milkshakes.map((shake) => (
          <SwiperSlide key={shake.id}>
            <div className="milkshake-card">
              <img src={shake.image} alt={shake.name} className="milkshake-img" />

              {/* Top-left: Likes */}
              <div className="likes">
                <FaHeart className="like-icon" /> {shake.likes}
                {/* <FaThumbsUp className="like-icon" /> {shake.likes} */}
              </div>

              {/* Bottom bar */}
              <div className="milkshake-footer">
                <span className="price">${shake.price}</span>
                <button className="buy-btn">Buy Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default TopMilkshakes
