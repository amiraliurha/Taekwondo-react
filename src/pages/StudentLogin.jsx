import React from "react";
import Navbar from "../components/Navbar";
import AuthForm from "../components/AuthForm";
import "../styles/auth.css";

const StudentLogin = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <div className="hero-background-student">
          <img src="/images/desktop-home.jpg" alt="تصویر پس زمینه" />
        </div>

        <AuthForm role="شاگرد" redirectPath="/student-panel" />
      </main>
    </div>
  );
};

export default StudentLogin;
