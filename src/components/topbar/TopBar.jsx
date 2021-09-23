import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.scss';

const TopBar = () => {
  const user = false;
  return (
    <div className="top">
      <div className="top-left">
        <i className="top__icon fab fa-facebook-square"></i>
        <i className="top__icon fab fa-twitter-square"></i>
        <i className="top__icon fab fa-instagram-square"></i>
        <i className="top__icon fab fa-pinterest-square"></i>
      </div>
      <div className="top-center">
        <ul className="top__menu">
          <li className="top__item">
            <Link to="/">HOME</Link>
          </li>
          <li className="top__item">ABOUT</li>
          <li className="top__item">CONTACT</li>
          <li className="top__item">
            <Link to="/write">WRITE</Link>
          </li>
          {user && <li className="top__item">LOGOUT</li>}
        </ul>
      </div>
      <div className="top-right">
        {user ? (
          <img
            src="https://images.unsplash.com/photo-1630955918267-8945f08153d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=430&q=80"
            alt=""
            className="top__avatar"
          />
        ) : (
          <ul className="top__menu">
            <li className="top__item">
              <Link to="/login">LOGIN</Link>
            </li>
            <li className="top__item">
              <Link to="/register">REGISTER</Link>
            </li>
          </ul>
        )}

        <i className="top__search-icon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
