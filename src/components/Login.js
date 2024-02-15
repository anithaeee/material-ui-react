import React from "react";
import "../components/login.css";
import { Typography, TextField, Button, Box, Checkbox } from "@mui/material";
import { useState } from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const [Email , setEmail] = useState("");
  const [password , setpassword] = useState("");
  return (
    <form>
      <Box sx={{ width: "100%", background: "white" }}>
        <Typography
          variant="h1"
          component="h2"
          style={{ fontSize: "20px", margin: "30px" }}
        >
          Login Form
        </Typography>
        <div style={{ margin: "10px" }}>
          <TextField
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
             value={Email}onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete=""
             value={password} onChange={(e)=>{setpassword(e.target.value)}}
          />
        </div>
        <Box>
          <Checkbox {...label} defaultChecked />
          <Typography variant="caption">
            Accepts terms and conditions
          </Typography>
        </Box>
        <Button variant="contained" onClick={()=>{
          console.log("Email:",Email);
          console.log("password:",password);
        }}>Register</Button>
      </Box>
    </form>
  );
};

export default Login;
