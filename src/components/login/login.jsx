import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  InputAdornment,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import imageLogin from "../../assets//login/bglogin.png";
import imageGoogle from "../../assets/login/gg.png";
import imageBackground from "../../assets/pgg.jpg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password
    };

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.data.token;
        const userId = data.data.id;

        // Lưu token vào localStorage (hoặc nơi khác nếu cần)
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', userId.toString());
        console.log('Login successful! Token:', token);
        setError('');
      } else {
        setError('Login failed. Please check your email and password.');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
      console.error('Error:', error);
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        back: "black", 
        padding: "30px 0",
        backgroundImage: `url(${imageBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container sx={{ width: "100%", height: "100%" }}>
        {/* Form login */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: { xs: 2, sm: 3, md: 5 },
            backgroundColor: "white",
            borderRadius: { xs: "0px", md: "20px 0 0 20px" },
            maxWidth: "500px", // Giới hạn độ rộng form
            width: "100%",
            mx: "auto", // Căn giữa form theo chiều ngang
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ mb: 1, textAlign: "left" }}
          >
            Hi, Welcome Back!
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ mb: 3, color: "#888", textAlign: "left" }}
          >
            Login to your account to enjoy
          </Typography>
          <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#7a59ff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#7a59ff",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "transparent", // Remove background on focus
                  },
                },
              }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#7a59ff",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#7a59ff",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "transparent", // Remove background on focus
                  },
                },
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Link href="#" variant="body2">
                Forgot your password?
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#6838E7",
                color: "#fff",
                borderRadius: "10px",
              }}
            >
              Log In
            </Button>
            <Box display="flex" justifyContent="space-between">
              <Link href="#" variant="body2">
                Not registered yet? Create an Account
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 2, mb: 2 }}>
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ mx: 2, color: "#888", fontSize: "14px" }}>
              or Sign in with Email
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>
          <Button
            fullWidth
            variant="outlined"
            startIcon={
              <img
                src={imageGoogle}
                alt="Google icon"
                style={{ width: 30, height: 30 }}
              />
            }
            sx={{
              color: "#3c4043",
              borderColor: "#dadce0",
              borderRadius: "10px",
              fontWeight: "bold",
              padding: "10px 16px",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#f8f9fa",
                borderColor: "#dadce0",
              },
            }}
          >
            Sign in with Google
          </Button>
        </Grid>

        {/* Hình ảnh bên phải */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundImage: `url(${imageLogin})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            padding: 3,
            borderRadius: "0 20px 20px 0",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Performance
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            +112.10%
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4 }}>
            1 Aug
          </Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Contribution
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            68.5% Growth
          </Typography>
          <Typography variant="h6" sx={{ mt: 4 }}>
            Last 30 days task achievement
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            +80.9%
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
