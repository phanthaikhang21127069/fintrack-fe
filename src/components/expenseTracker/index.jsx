import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import imageBackground from "../../assets/bggg.jpg";

const ExpenseTracker = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundImage: `url(${imageBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      ;
      <Box sx={{ flexGrow: 1, padding: "20px" }}>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Typography variant="h4" fontWeight="bold" color="#fff">
            Expense Tracker
          </Typography>
          <Box
            component="input"
            placeholder="Search expenses..."
            sx={{ padding: "10px", borderRadius: "8px", width: "300px" }}
          />
        </Box>

        <Grid container spacing={3}>
          {/* Main Cards Area */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                marginBottom: "20px",
                borderRadius: "16px",
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
              }}
            >
              <CardContent>
                <Typography variant="h5" color="#fff">
                  Discover, Buy, and Sell Digital Assets
                </Typography>
              </CardContent>
            </Card>

            {/* Today Top Market */}
            <Card
              sx={{
                borderRadius: "16px",
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h5" color="#fff">
                  Today Top Market
                </Typography>
                {/* Market Data would go here */}
              </CardContent>
            </Card>
          </Grid>

          {/* Right Panel for Balance and Transactions */}
          <Grid item xs={12} md={4}>
            {/* Balance Usage Card */}
            <Card
              sx={{
                marginBottom: "20px",
                borderRadius: "16px",
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h6" color="#fff">
                  Balance Usage
                </Typography>
                {/* Circular Chart or Progress Bar */}
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card
              sx={{
                borderRadius: "16px",
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h6" color="#fff">
                  Recent Transactions
                </Typography>
                {/* List of Transactions */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ExpenseTracker;
