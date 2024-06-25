import * as React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/joy';

function DesktopMenu() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          My App
        </Typography>
        <Button variant="plain" onClick={() => {}}>
          Home
        </Button>
        <Button variant="plain" onClick={() => {}}>
          About
        </Button>
        <Button variant="plain" onClick={() => {}}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default DesktopMenu;
