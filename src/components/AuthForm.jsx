import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ role, redirectPath }) => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!mobile.trim() || !password.trim()) {
      setError("لطفاً شماره موبایل و رمز عبور خود را به طور کامل وارد نمایید.");
      return;
    }

    // در واقعیت اینجا باید API Call انجام شود
    console.log("Login attempt:", { role, mobile, password });

    // هدایت به پنل مربوطه
    navigate(redirectPath);
  };

  return (
    <div className="auth-stage container">
      <div className="auth-card">
        <h3 className="auth-title">
          <span>ورود {role}</span>
        </h3>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="input-group">
            <label htmlFor="mobile">شماره موبایل/کد ملی</label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="مثال: 0912xxxxxxx"
              required
              className={error && !mobile.trim() ? "input-error" : ""}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">رمز عبور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور خود را وارد کنید"
              required
              className={error && !password.trim() ? "input-error" : ""}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="btn-login">
            ورود به پنل
          </button>

          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/")}
          >
            بازگشت به انتخاب نقش
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
