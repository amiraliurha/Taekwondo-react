import React from "react";
import { Link } from "react-router-dom";

const DashboardLayout = ({ role, userName, children, stats = [] }) => {
  return (
    <main className="dashboard-main">
      <div className="container">
        <aside className="sidebar">
          <div className="user-info">
            <h3>{userName}</h3>
            <span className="user-role">{role}</span>
          </div>

          <nav className="sidebar-nav">
            <ul>
              <li className="active">
                <Link to="#">داشبورد</Link>
              </li>
              <li>
                <Link to="#">پروفایل</Link>
              </li>
              <li>
                <Link to="#">کلاس‌ها</Link>
              </li>
              <li>
                <Link to="#">گزارشات</Link>
              </li>
              <li>
                <Link to="#">تنظیمات</Link>
              </li>
              <li>
                <Link to="/">خروج</Link>
              </li>
            </ul>
          </nav>
        </aside>

        <section className="content-area">
          <h1 className="content-title">خوش آمدید، {userName}!</h1>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.title}</h3>
                <p className="stat-number">{stat.value}</p>
              </div>
            ))}
          </div>

          <div id="dynamic-content">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default DashboardLayout;
