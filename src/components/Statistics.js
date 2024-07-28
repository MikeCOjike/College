import React from 'react';

const Statistics = () => {
  return (
    <div>
      <h2>统计</h2>
      <div className="statistics-info">
        <div>今日任务：5</div>
        <div>本月已完成任务：42</div>
        <div>任务统计：<span>详情</span></div>
        <div className="statistics-chart">
          {/* 图表 */}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
