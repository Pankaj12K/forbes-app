import { TextField, Button, Tabs, Tab } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { PropTypes } from "prop-types";
import { Divider } from "@mui/material";
import "./AuthView.css";
const Submit = styled(Button)(() => ({
  borderRadius: "5px",
  paddingBlock: "10px",
  marginRight: "auto",
}));
const Social = styled(Button)(() => ({
  padding: "15px",
  width: "auto",
  height: "auto",
  color: "#fff",
}));
function TabPanel(props) {
  const { children, value, paneName, jsx, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== paneName}
      id={`simple-tabpanel-${paneName}`}
      aria-labelledby={`simple-tab-${paneName}`}
      {...other}
    >
      {value === paneName && children.map((child) => child)}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  paneName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
const AuthView = () => {
  const [value, setValue] = useState("Sign Up");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="wrapper">
      <form>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="fullWidth"
          sx={{ mr: "auto" }}
        >
          <Tab label="signup" value="Sign Up" />
          <Tab label="login" value="Login" />
        </Tabs>
        <h1 className="title" id="formTitle" style={{ marginRight: "auto" }}>
          {value}
        </h1>
        <TabPanel value={value} paneName="Sign Up" className="tabPane">
          <TextField
            error={false}
            type="text"
            id="name"
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            error={false}
            type="email"
            id="email"
            name="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            variant="outlined"
          />
        </TabPanel>
        <TabPanel value={value} paneName="Login" className="tabPane">
          <TextField
            error={false}
            type="email"
            id="email"
            name="email"
            label="Email"
            variant="outlined"
          />
          <TextField
            type="password"
            id="password"
            name="password"
            label="Password"
            variant="outlined"
          />
        </TabPanel>

        <Submit type="button" variant="outlined">
          Let's Go!
        </Submit>
        <Divider sx={{ width: "100%" }} />
        <div className="social">
          <Social type="button" variant="outlined">
            <GoogleIcon />
            &nbsp;Google
          </Social>

          <Social type="button" variant="outlined">
            <GitHubIcon />
            &nbsp;Github
          </Social>
        </div>
      </form>
    </div>
  );
};

export default AuthView;
