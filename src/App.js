// src/App.tsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './themes/theme'; // Import theme từ file theme
import { router } from './routes'; // Đảm bảo import đúng kiểu

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Áp dụng theme */}
      <CssBaseline /> {/* Reset mặc định CSS */}
      <RouterProvider router={router} /> {/* Cung cấp router cho ứng dụng */}
    </ThemeProvider>
  );
}

export default App;
