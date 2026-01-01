import React from "react";
import Navbar from "../components/Navbar";
import AuthForm from "../components/AuthForm";
import "../styles/auth.css";

const CoachLogin = () => {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <div className="hero-background-coach">
          <img
            src="/images/desktop-home.jpg"
            alt="تصویر پس زمینه هنرهای رزمی"
          />
        </div>

        <AuthForm role="مربی" redirectPath="/coach-panel" />
      </main>
    </div>
  );
};

export default CoachLogin;
