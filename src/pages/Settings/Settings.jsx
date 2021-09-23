import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import './settings.scss';

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-update">Update Your Account</span>
          <span className="settings-delete">Delete Account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-profile">
            <img src="/assets/images/me.jpeg" alt="" />
            <label htmlFor="file-input">
              <i className="settings-profile-icon far fa-user-circle"></i>
            </label>
            <input type="file" id="file-input" style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="curtis" />
          <label>Email</label>
          <input type="email" placeholder="abc@example.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;
