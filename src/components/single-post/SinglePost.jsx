import React from 'react';
import './single-post.scss';

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="sp-wrapper">
        <img
          src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxNHxKOXlyUGFIWFJRWXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="sp__image"
        />
        <h1 className="sp__title">
          How to install extensions in VS Code
          <div className="sp__modify">
            <i className="sp__icon far fa-edit"></i>
            <i className="sp__icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="sp__info">
          <span className="sp__author">
            Author: <b>Curtis</b>
          </span>
          <span className="sp__date">1 hour ago</span>
        </div>
        <p className="sp__desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut aspernatur fugiat,
          sapiente cupiditate accusantium atque nesciunt maiores laudantium, magnam aliquid ducimus
          itaque, suscipit recusandae! Ab quasi magnam dolorum fuga! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nemo est tempora provident voluptates vitae sapiente
          repellat optio omnis itaque doloremque illo aut architecto cupiditate enim saepe, magni
          reiciendis vero ab! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad culpa
          doloribus cupiditate eius, aperiam ipsa exercitationem libero ducimus voluptatem molestias
          officia suscipit ab repudiandae minus esse non ratione repellat aspernatur? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Beatae voluptates, aut perferendis minima
          animi natus repudiandae maiores amet cum. Odio, consectetur corporis. Minima aliquid
          quaerat delectus atque unde quia nulla. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Iste, voluptas maxime tenetur quasi tempore enim assumenda, repudiandae
          illum dolorem eligendi quis provident commodi ab molestias numquam adipisci nulla
          veritatis voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          eaque incidunt numquam, commodi, harum molestias error ipsam repudiandae odio doloremque
          quidem dolores dolor vero voluptatem officiis suscipit, temporibus natus quia.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
