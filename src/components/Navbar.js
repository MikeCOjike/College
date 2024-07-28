import React from 'react';
import { AppBar, Toolbar, Typography, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#1E1E1E' }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          校园管理系统
        </Typography>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <SearchIcon />
          <InputBase placeholder="你在寻找什么作业？" style={{ marginLeft: 8, color: '#fff' }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
