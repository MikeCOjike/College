import React from 'react';

const UserProfile = () => {
  return (
    <div>
      <h2>个人资料</h2>
      <div className="profile-details">
        <img src="/path/to/profile.jpg" alt="User" />
        <div>
          <p><strong>张三</strong></p>
          <p>出生日期：2000-12-10</p>
          <p>教育背景：北京大学</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
