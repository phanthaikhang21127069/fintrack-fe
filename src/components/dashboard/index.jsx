import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import imageBackground from "../../assets/bg.png";
import image1 from "../../assets/dashboard/1.png";
import image2 from "../../assets/dashboard/2.png";
import image3 from "../../assets/dashboard/3.png";
import image4 from "../../assets/dashboard/4.png";
import image5 from "../../assets/dashboard/5.png";
import image6 from "../../assets/dashboard/6.png";
import image7 from "../../assets/dashboard/7.png";
import image8 from "../../assets/dashboard/8.png";
import image9 from "../../assets/dashboard/9.png";

import CustomCard from "../../components/card";

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh", // Chiếm toàn bộ chiều cao của viewport
        backgroundColor: "black",
        backgroundImage: `url(${imageBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex", // Đảm bảo bố cục linh hoạt
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          height: "20%",
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Good morning, Thang Loz Bao!
        </Typography>
        <Typography variant="h5" sx={{ mt: 1 }}>
          Welcome to Fintrackr
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2, color: "gray" }}>
          Take control of your finances and make informed decisions with
          features designed for your financial success.
        </Typography>
      </Box>

      {/* Phần grid chiếm 70% chiều cao */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "80%",
          mx: "auto",
          marginTop: "20px",
          width: "60%",
        }}
      >
        <Grid container spacing={3} sx={{ height: "100%" }}>
          {/* Grid bên trái */}
          <Grid item xs={12} md={7} sx={{ height: "100%" }}>
            <Grid container spacing={3} sx={{ height: "100%" }}>
              {/* Card lớn hàng đầu tiên */}
              <Grid item xs={12} sx={{ height: "35%" }}>
              <CustomCard image={image1} to="/login" />
              </Grid>

              {/* Hai card nhỏ bên trái */}
              <Grid item xs={12} md={6} sx={{ height: "65%" }}>
                <Grid container spacing={3} sx={{ height: "100%" }}>
                  <Grid item xs={12} sx={{ height: "60%" }}>
                    <CustomCard image={image3} />
                  </Grid>
                  <Grid item xs={12} sx={{ height: "40%" }}>
                    <CustomCard image={image4} />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={6}>
                <Grid container spacing={3} sx={{ height: "100%" }}>
                  <Grid item xs={12}>
                    <CustomCard image={image5} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Grid bên phải */}
          <Grid item xs={12} md={5} sx={{ height: "100%" }}>
            <Grid container spacing={3} sx={{ height: "100%" }}>
              {/* Card lớn hàng đầu tiên */}
              <Grid item xs={12} sx={{ height: "45%" }}>
                <CustomCard image={image2} />
              </Grid>

              <Grid item xs={12} sx={{ height: "25%", position: "relative" }}>
                <Grid container sx={{ height: "100%" }}>
                  {/* CustomCard đầu tiên */}
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{ height: "100%", position: "relative", zIndex: 7 }}
                  >
                    <CustomCard
                      image={image7} 
                      sx={{
                        marginRight: "-15px",
                        zIndex: 7,
                      }}
                    />
                  </Grid>

                  {/* CustomCard thứ hai */}
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{ height: "100%", position: "relative", zIndex: 8 }}
                  >
                    <CustomCard
                      image={image8}
                      sx={{
                        marginLeft: "-15px",
                        marginRight: "-15px",
                        zIndex: 8,
                      }}
                    />
                  </Grid>

                  {/* CustomCard thứ ba */}
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{ height: "100%", position: "relative", zIndex: 9 }}
                  >
                    <CustomCard
                      image={image6} // Truyền props image cho CustomCard
                      sx={{
                        marginLeft: "-15px", // Điều chỉnh khoảng cách để chồng lên nhau
                        zIndex: 9,
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} sx={{ height: "30%" }}>
                <Grid container spacing={3} sx={{ height: "100%" }}>
                  <Grid item xs={12}>
                    <Card
                      sx={{
                        borderRadius: "30px",
                        height: "100%",
                        backgroundImage: `url(${image9})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "transform 0.5s ease, box-shadow 0.3s ease",
                        border: "2px solid transparent",
                        "&:hover": {
                          transform: "scale(1.03)",
                          boxShadow: "5px 5px 10px rgba(105, 216, 255, 0.45)",
                          border: "1px solid white",
                        },
                      }}
                    >
                      <CardContent>
                        <Typography></Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
