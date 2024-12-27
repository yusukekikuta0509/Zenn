import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Top from './components/Top';
import Contact from './components/Contact';
import Loading from './components/Loading'; // Loadingコンポーネントをインポート
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // エラー状態を追加

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 何らかの非同期処理 (例: APIリクエスト) をシミュレート
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (err) {
        console.error("Error:", err);
        setError("データの取得に失敗しました。"); // エラーメッセージを設定
        setLoading(false); // エラー発生時もローディングを終了
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loading />; // Loadingコンポーネントを表示
  }

  if (error) {
    return <div>{error}</div>; // エラーメッセージを表示
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content"> {/* content divを追加 */}
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;