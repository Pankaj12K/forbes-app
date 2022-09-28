import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ToggleButton } from "@mui/material";
const Navbar = () => {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      color="primary"
      onChange={() => {
        setSelected(!selected);
      }}
      sx={{
        borderRadius: "50%",
      }}
    >
      <MenuRoundedIcon />
    </ToggleButton>
  );
};

export default Navbar;
