import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LandingPage } from './pages/Landing/LandingPage.client';
import { globalStyles } from './stitches.config';

function App() {
  globalStyles();

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
