import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import AuthPage from './pages/AuthPage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import Navbar from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext'; // Adjust the import path as necessary


function App() {
  return (
    <AuthProvider>

    <ThemeProvider theme={theme}>
   <BrowserRouter>
   <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="faqs" element={<FAQPage />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="order" element={<OrderPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
