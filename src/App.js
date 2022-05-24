import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './Newpages';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:category' element={<NewsPage />} />
    </Routes>
  );
}

export default App;
