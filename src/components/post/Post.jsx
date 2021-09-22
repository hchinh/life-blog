import React from 'react';
import './post.scss';

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIxNHxKOXlyUGFIWFJRWXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        alt=""
        className="post__image"
      />
      <div className="post__info">
        <div className="post__categories">
          <span className="post__category">Technology</span>
        </div>
        <div className="post__title">How to install extensions in VS Code</div>
        <hr />
        <div className="post__date">1 hour ago</div>
      </div>
      <div className="post__desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quae amet reiciendis aliquid,
        dolor ullam repudiandae ex nemo tenetur voluptate dolorum natus distinctio error praesentium
        doloremque. Eaque voluptatem ut quidem. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Placeat quae tempora sed a quos? Voluptatum dolores suscipit ratione odio doloribus ex
        porro, voluptates facere praesentium sit dolor molestiae placeat illo!
      </div>
    </div>
  );
};

export default Post;
