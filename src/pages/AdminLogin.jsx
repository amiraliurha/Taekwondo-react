import React from "react";
import Navbar from "../components/Navbar";
import AuthForm from "../components/AuthForm";
import "../styles/auth.css";

const AdminLogin = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <div className="hero-background-admin">
          <img src="/images/desktop-home.jpg" alt="تصویر پس زمینه مدیریتی" />
        </div>

        <AuthForm role="ادمین" redirectPath="/admin-panel" />
      </main>
    </div>
  );
};

export default AdminLogin;
