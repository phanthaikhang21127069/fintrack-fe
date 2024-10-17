// theme.jsx
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif', // Font Montserrat toàn cục
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none', // Loại bỏ underline cho tất cả các link
          color: '#2B1873', // Màu link tùy chỉnh
          '&:hover': {
            textDecoration: 'underline', // Tùy chọn underline khi hover
          },
        },
      },
    },
    MuiTextField: {
        styleOverrides: {
          root: {
            '& input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 1000px white inset !important', // Xóa background khi autofill
              WebkitTextFillColor: '#000 !important', // Màu văn bản
              transition: 'background-color 5000s ease-in-out 0s',
            },
            '& input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active': {
              WebkitBoxShadow: '0 0 0 1000px white inset !important',
              WebkitTextFillColor: '#000 !important',
              fontFamily: 'Montserrat, sans-serif !important',
              fontSize: '16px !important',
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 1000px white inset !important', // Xóa background khi autofill
              WebkitTextFillColor: '#000 !important',
              transition: 'background-color 5000s ease-in-out 0s',
            },
            '&:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
              WebkitBoxShadow: '0 0 0 1000px white inset !important',
              WebkitTextFillColor: '#000 !important',
              fontFamily: 'Montserrat, sans-serif !important',
              fontSize: '16px !important',
            },
          },
        },
      },
  },
});

export default theme;
