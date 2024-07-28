// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import Timetable from './components/Timetable';
import Statistics from './components/Statistics';
import Subjects from './components/Subjects';
import './styles/main.css'; // 引入样式文件

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/subjects" element={<Subjects />} />
              {/* 添加新的路由 */}
              <Route path="/courses" element={<div>课程信息管理</div>} />
              <Route path="/teachers" element={<div>教师信息管理</div>} />
              <Route path="/classes" element={<div>班级信息管理</div>} />
              <Route path="/tuanyuan" element={<div>团员信息管理</div>} />
              <Route path="/dangyuan" element={<div>党员信息管理</div>} />
              <Route path="/majors" element={<div>专业信息管理</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
