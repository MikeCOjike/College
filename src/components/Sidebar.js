import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: '#2C2C2C', color: '#fff', height: '100vh', padding: '10px' }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="学生信息管理" />
        </ListItem>
        <ListItem button component={Link} to="/courses">
          <ListItemText primary="课程信息管理" />
        </ListItem>
        <ListItem button component={Link} to="/teachers">
          <ListItemText primary="教师信息管理" />
        </ListItem>
        <ListItem button component={Link} to="/classes">
          <ListItemText primary="班级信息管理" />
        </ListItem>
        <ListItem button component={Link} to="/tuanyuan">
          <ListItemText primary="团员信息管理" />
        </ListItem>
        <ListItem button component={Link} to="/dangyuan">
          <ListItemText primary="党员信息管理" />
        </ListItem>
        <ListItem button component={Link} to="/majors">
          <ListItemText primary="专业信息管理" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
