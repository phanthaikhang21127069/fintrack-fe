import React from "react";
import { Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";


const CustomCard = ({ image, sx = {}, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
      <Card
        onClick={handleClick}
        sx={{
          borderRadius: "30px",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease, box-shadow 0.3s ease",
          border: "2px solid transparent",
          cursor: "pointer", // Con trỏ chỉ vào để thể hiện rằng có thể click
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: "5px 5px 10px rgba(105, 216, 255, 0.45)",
            border: "1px solid white",
          },
          ...sx, // Áp dụng style tùy chỉnh
        }}
      >
        <CardContent>{/* Bạn có thể thêm nội dung vào đây */}</CardContent>
      </Card>
  );
};

export default CustomCard;
