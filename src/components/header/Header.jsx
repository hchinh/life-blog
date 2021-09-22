import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">
        <span className="header__title--sm">Curtis's life</span>
        <span className="header__title--lg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="header__banner"
      />
    </div>
  );
};

export default Header;
