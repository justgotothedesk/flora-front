// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Landing Page</h2>
      <Link to="/login">
        <button>로그인</button>
      </Link>
      <Link to="/register">
        <button>회원가입</button>
      </Link>
      <Link to="/user/info">
        <button>내 정보</button>
      </Link>
    </div>
  );
};

export default LandingPage;
