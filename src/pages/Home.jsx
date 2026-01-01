import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        به سامانه جامع تکواندوی استان تهران خوش آمدید
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px" }}>
        لطفاً نقش خود را برای ورود به پنل مربوطه انتخاب کنید.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          to="/student-login"
          style={{
            padding: "15px 30px",
            background: "#d92a2a",
            color: "white",
            textDecoration: "none",
            borderRadius: "50px",
            fontWeight: "bold",
            transition: "all 0.3s",
          }}
        >
          ورود به عنوان شاگرد
        </Link>

        <Link
          to="/coach-login"
          style={{
            padding: "15px 30px",
            background: "#1a1a1a",
            color: "white",
            textDecoration: "none",
            borderRadius: "50px",
            fontWeight: "bold",
            transition: "all 0.3s",
          }}
        >
          ورود به عنوان مربی
        </Link>

        <Link
          to="/admin-login"
          style={{
            padding: "15px 30px",
            background: "white",
            color: "#d92a2a",
            textDecoration: "none",
            borderRadius: "50px",
            fontWeight: "bold",
            border: "2px solid #d92a2a",
            transition: "all 0.3s",
          }}
        >
          ورود به عنوان ادمین
        </Link>
      </div>
    </div>
  );
};

export default Home;
