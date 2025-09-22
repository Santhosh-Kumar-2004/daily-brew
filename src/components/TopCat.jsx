import React from 'react'
import '../styles/TopCat.css'
import espressoImg from '../assets/coffee1.jpg'
import latteImg from '../assets/coffee2.jpg'
import cappuccinoImg from '../assets/coffee3.jpg'
import decor2 from "../assets/coffee_scup.png";
import decor1 from "../assets/beans_life.png";

const TopCategories = () => {
  const categories = [
    { id: 1, name: 'Espresso', image: espressoImg },
    { id: 2, name: 'Latte', image: latteImg },
    { id: 3, name: 'Cappuccino', image: cappuccinoImg },
  ]

  return (
    <>
      <div className="scrolling-decor">
        {/* <img src={decor1} alt="decor1" className="decor-img decor1" /> */}
        <img src={decor2} alt="decor2" className="decor-img decor2" />
        {/* <img src={decor3} alt="decor3" className="decor-img decor3" /> */}
      </div>
      <section className="top-categories" id="menu">
        <h2 className="section-title">Top Categories</h2>
        <p className="section-subtitle">Explore the Most Bought Drinks This Week</p>

        <div className="categories-container">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <img src={cat.image} alt={cat.name} className="category-img" />
              <div className="category-overlay">
                <h3 className="category-name">{cat.name}</h3>
                <p className="view-more">View More</p>
              </div>
            </div>
          ))}
        </div>
        <div className="scrolling-decor">
        {/* <img src={decor1} alt="decor1" className="decor-img decor1" /> */}
        {/* <img src={decor2} alt="decor2" className="decor-img decor2" /> */}
        {/* <img src={decor3} alt="decor3" className="decor-img decor3" /> */}
      </div>
      </section>
    </>
  )
}

export default TopCategories
