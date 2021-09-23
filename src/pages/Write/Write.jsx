import React from 'react';
import './write.scss';

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
        alt=""
        className="write-image"
      />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: 'none' }} />
          <input type="text" className="write-input" placeholder="Title" autoFocus={true} />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-input write-desc"
            type="text"
            placeholder="Tell your story..."
          ></textarea>
        </div>
        <button className="write-submit">Publish</button>
      </form>
    </div>
  );
};

export default Write;
