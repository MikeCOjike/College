import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
      <Grid item xs={12} md={4}>
        <Card style={{ backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h5" style={{ color: '#333' }}>要点新闻</Typography>
            <Typography variant="body2" style={{ color: '#555' }}>新闻内容1</Typography>
            <Typography variant="body2" style={{ color: '#555' }}>新闻内容2</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h5" style={{ color: '#333' }}>精彩人物</Typography>
            <Typography variant="body2" style={{ color: '#555' }}>人物内容1</Typography>
            <Typography variant="body2" style={{ color: '#555' }}>人物内容2</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card style={{ backgroundColor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h5" style={{ color: '#333' }}>会议安排</Typography>
            <Typography variant="body2" style={{ color: '#555' }}>会议内容1</Typography>
            <Typography variant="body2" style={{ color: '#555' }}>会议内容2</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
