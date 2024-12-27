import React, { useState, useEffect } from 'react';

const Top = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 500); // 0.5秒後にloadedをtrueにする
  }, []);

  return (
    <div className="container">
      <div className={`fade-in ${loaded ? 'loaded' : ''}`}>
        <h1>ようこそ</h1>
        <p>ここは架空の会社のトップページです。</p>
        <p>テスト用のページです。</p>
      </div>
    </div>
  );
};

export default Top;