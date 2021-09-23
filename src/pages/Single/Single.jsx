import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import SinglePost from '../../components/single-post/SinglePost';
import './single.scss';

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
