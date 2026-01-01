import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import CoachLogin from "./pages/CoachLogin";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/coach-login" element={<CoachLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* مسیرهای پنل‌ها را بعداً اضافه می‌کنیم */}
        <Route path="/student-panel" element={<div>پنل شاگرد</div>} />
        <Route path="/coach-panel" element={<div>پنل مربی</div>} />
        <Route path="/admin-panel" element={<div>پنل ادمین</div>} />
      </Routes>
    </Router>
  );
}

export default App;
