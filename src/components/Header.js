
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>架空の会社</h1>
      <nav>
        <Link to="/">トップ</Link> | <Link to="/contact">お問い合わせ</Link>
      </nav>
    </div>
  );
};

export default Header;