import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export default function BasicRating({ id, ratingValue }) {
  const [value, setValue] = React.useState(null);
  const handleChange = (e) => {
    const value = e.target.value;
    let data = JSON.parse(localStorage.getItem("history"));
    data.forEach((ele, idx) => {
      if (ele.id === id) {
        ele.rating = value;
      }
    });
    localStorage.setItem("history", JSON.stringify(data));
    setValue(value);
  };
  return (
    <Box
    //   sx={{
    //     '& > legend': { mt: 2 },
    //   }}
    >
      <Rating
        name="simple-controlled"
        value={!value ? ratingValue : value}
        onChange={handleChange}
      />
      {/* <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} /> */}
    </Box>
  );
}
