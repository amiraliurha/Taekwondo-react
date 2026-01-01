import React from "react";
import Navbar from "../components/Navbar";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/admin.css";

const AdminPanel = () => {
  const adminStats = [
    { title: "کل کاربران", value: "۱۵۶ نفر" },
    { title: "مربیان فعال", value: "۱۲ نفر" },
    { title: "شعبه‌ها", value: "۵ شعبه" },
    { title: "درآمد کل", value: "۸۵,۰۰۰,۰۰۰ تومان" },
  ];

  return (
    <div className="app">
      <Navbar />
      <DashboardLayout role="ادمین" userName="مدیر سیستم" stats={adminStats}>
        <div className="admin-content">
          <h2>مدیریت سیستم</h2>
          <div className="management-panel">
            <button className="admin-btn">افزودن کاربر</button>
            <button className="admin-btn">مدیریت مربیان</button>
            <button className="admin-btn">گزارش کلی</button>
            <button className="admin-btn">تنظیمات سیستم</button>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default AdminPanel;
