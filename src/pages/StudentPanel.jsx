import React from "react";
import Navbar from "../components/Navbar";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/student.css";

const StudentPanel = () => {
  const studentStats = [
    { title: "کلاس‌های فعال", value: "۳ کلاس" },
    { title: "جلسات باقی‌مانده", value: "۱۲ جلسه" },
    { title: "میزان پیشرفت", value: "۷۵٪" },
    { title: "تاریخ آزمون بعدی", value: "۱۴۰۳/۰۱/۱۵" },
  ];

  return (
    <div className="app">
      <Navbar />
      <DashboardLayout role="شاگرد" userName="علی محمدی" stats={studentStats}>
        <div className="class-selection">
          <h2>کلاس‌های شما</h2>
          <div className="class-selection-grid">
            <div className="class-card selected">
              <h3>تکواندو پیشرفته</h3>
              <p>مربی: استاد رضایی</p>
              <p>زمان: شنبه و چهارشنبه ۱۸-۲۰</p>
            </div>
            <div className="class-card">
              <h3>دفاع شخصی</h3>
              <p>مربی: استاد کریمی</p>
              <p>زمان: دوشنبه ۱۶-۱۸</p>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default StudentPanel;
