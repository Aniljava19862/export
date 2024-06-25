import * as React from 'react';
import { useState } from 'react';
import { Drawer, ListItem, ListItemContent,ListItemButton,List,IconButton } from '@mui/joy';
import useMediaQuery from '@mui/material/useMediaQuery';

function MobileMenu() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen}>
        {/* Icon for menu button, like Menu or Hamburger icon */}
      </IconButton>
      <Drawer open={open} onClose={handleClose}>
        <List>
          <ListItemButton onClick={handleClose}>
            <ListItem primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={handleClose}>
            <ListItemContent primary="About" />
          </ListItemButton>
          <ListItemButton onClick={handleClose}>
            <ListItemContent primary="Contact" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}

export default MobileMenu;
