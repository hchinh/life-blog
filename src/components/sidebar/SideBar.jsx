import React from 'react';
import './sidebar.scss';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <span className="sidebar__title">ABOUT ME</span>
        <img src="/assets/images/me.jpeg" alt="about-me" />
        <p>Love to learn and share with people 🥰</p>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">CATEGORIES</span>
        <ul className="sidebar__list">
          <li className="sidebar__category">English</li>
          <li className="sidebar__category">Technology</li>
          <li className="sidebar__category">Astronomy</li>
          <li className="sidebar__category">Sports</li>
          <li className="sidebar__category">Life</li>
          <li className="sidebar__category">Music</li>
        </ul>
      </div>
      <div className="sidebar__item">
        <span className="sidebar__title">FOLLOW ME</span>
        <div className="sidebar__social">
          <i className="sidebar__icon fab fa-facebook-square"></i>
          <i className="sidebar__icon fab fa-twitter-square"></i>
          <i className="sidebar__icon fab fa-instagram-square"></i>
          <i className="sidebar__icon fab fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
