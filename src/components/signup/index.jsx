import React, { useState } from "react";
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
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import imageLogin from "../../assets//login/bglogin.png";
import imageGoogle from "../../assets/login/gg.png";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const registerData = {
      username,
      password,
      email,
      firstName,
      lastName,
    };

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });

      console.log("Response status:", response.status);

      const responseBody = await response.text();
      console.log("Response body:", responseBody);

      if (response.ok) {
        const data = JSON.parse(responseBody);
        console.log("Register successful!", data);
        setError("");
      } else {
        setError(
          `Registration failed. Status: ${response.status}. Response: ${responseBody}`
        );
      }
    } catch (error) {
      setError("An error occurred during registration.");
      console.error("Error occurred:", error);
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
        padding: "30px 0", // Padding trên và dưới cho toàn bộ container
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{ 
          width: "100%",
          height: "100%",
        }}
      >
        {/* Form đăng ký */}
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
            width: "300px",
            mx: "auto",
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
            Create an account and enjoy starting Apexify
          </Typography>

          <form onSubmit={handleRegister}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="First Name"
                  placeholder="Enter your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon />
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
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  required
                  label="Last Name"
                  placeholder="Enter your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon />
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
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Email Address"
                  placeholder="Enter your Email Address"
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
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Username"
                  placeholder="Enter your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon />
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
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Password"
                  placeholder="Enter your Password"
                  type="password"
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
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="I agree to the Terms & Conditions"
                      color="primary"
                    />
                  }
                  label="I agree to the Terms & Conditions"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "#6838E7",
                    color: "#fff",
                    borderRadius: "10px",
                  }}
                >
                  Signup
                </Button>
              </Grid>
            </Grid>
          </form>

          <Box display="flex" justifyContent="space-between" mt={2}>
            <Link href="#" variant="body2">
              Already have an Account? Login
            </Link>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mt: 2, mb: 2 }}>
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ mx: 2, color: "#888", fontSize: "14px" }}>
              or Sign up with Email
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
            or Sign up with Email
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

export default Signup;
