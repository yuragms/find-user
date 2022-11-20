import React from 'react';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { FavouritesPage } from './pages/FavouritesPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
<Route path="/favourites" element={<FavouritesPage/>}/>
      
    </Routes>
  );
}

export default App;
