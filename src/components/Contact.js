// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('送信されました（テスト用）'); // 実際には送信しない
  };

  return (
    <div className="contact-container">
      <h1>お問い合わせ</h1>
      <p>営業行為のメールはおやめください。</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="名前" onChange={handleChange} />
        <input type="email" name="email" placeholder="メールアドレス" onChange={handleChange} />
        <textarea name="message" placeholder="メッセージ" onChange={handleChange} />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default Contact;

