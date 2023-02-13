import React, { useState } from "react";
import { Button } from "@progress/kendo-react-buttons";
import "./App.css";
import { Drawer } from "@mui/material";
import { Menu, MenuItem } from "@progress/kendo-react-layout";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <h1>Menu test</h1>

      <p>Show sidebar with main area of window hidden</p>
      <Button onClick={() => setDrawerOpen(true)}>Show sidebar</Button>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: 200,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 200,
            boxSizing: "border-box",
          },
        }}
        hideBackdrop={false}
      >
        <Menu vertical={true}>
          <MenuItem text="Item 1">
            <MenuItem text="subitem 1" />
            <MenuItem text="subitem 2" />
          </MenuItem>
          <MenuItem text="Item 2">
            <MenuItem text="subitem 1" />
            <MenuItem text="subitem 2" />
          </MenuItem>
        </Menu>
      </Drawer>
    </div>
  );
}

export default App;
