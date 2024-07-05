// import React from 'react';
import { AppBar, Toolbar, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static"  component="footer" sx={{ top: 'auto', bottom: 0, width: '100%', height: '50px',  backgroundColor: '#1f2026', }}>
      <Toolbar sx={{ minHeight: '50px', padding: '0 1rem' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="body2" color="inherit" sx={{ color: '#12efc8' }}>
            © 2024 FinSage AI
          </Typography>
        </Box>
        <Box>
          <Link href="#" color="inherit" sx={{ marginRight: 2 , color: '#b3b6c2'}}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ color: '#b3b6c2' }}>
            Terms of Service
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
