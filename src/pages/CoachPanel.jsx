import React from "react";
import Navbar from "../components/Navbar";
import DashboardLayout from "../components/DashboardLayout";
import "../styles/coach.css";

const CoachPanel = () => {
  const coachStats = [
    { title: "شاگردان فعال", value: "۲۴ نفر" },
    { title: "کلاس‌های جاری", value: "۵ کلاس" },
    { title: "درآمد ماهانه", value: "۱۵,۰۰۰,۰۰۰ تومان" },
    { title: "رزرو بعدی", value: "فردا ۱۶:۰۰" },
  ];

  return (
    <div className="app">
      <Navbar />
      <DashboardLayout role="مربی" userName="استاد احمدی" stats={coachStats}>
        <div className="coach-content">
          <h2>گزارش مالی</h2>
          <div className="financial-report">
            <table>
              <thead>
                <tr>
                  <th>تاریخ</th>
                  <th>شاگرد</th>
                  <th>مبلغ</th>
                  <th>وضعیت</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>۱۴۰۲/۱۲/۱۵</td>
                  <td>محمد حسینی</td>
                  <td>۸۰۰,۰۰۰ تومان</td>
                  <td className="paid">پرداخت شده</td>
                </tr>
                <tr>
                  <td>۱۴۰۲/۱۲/۱۰</td>
                  <td>فاطمه محمدی</td>
                  <td>۶۰۰,۰۰۰ تومان</td>
                  <td className="pending">در انتظار</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default CoachPanel;
