import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem onClick={() => navigate("/")} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={() => navigate("/history")} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary={"History"} />
          </ListItemButton>
        </ListItem>
      </List>
      {/* <ul className="p-2 flex items-start flex-col justify-center gap-3">
        <NavLink href="/">
        <li className="flex items-center gap-3"><HomeIcon/> Home</li>
        </NavLink>
        <li className="flex items-center gap-3"><HistoryIcon/> History</li>
      </ul> */}
    </Box>
  );

  return (
    <div className=" flex items-center flex-wrap  top-0 z-10 w-full bg-red-200 justify-between">
      <div className="flex w-full items-center justify-between p-1">
        <h1
          onClick={() => navigate("/")}
          className="font-semibold text-xl text-gray-700 cursor-pointer"
        >
          Bot AI
        </h1>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <div className="flex gap-3 items-center justify-center pr-8"></div>
    </div>
  );
}
