import React from "react";
import "./Courses.css";

const Courses = () => {
  const itCourse = {
    id: 1,
    name: "เทคโนโลยีสารสนเทศ (Information Technology)",
    description: "หลักสูตรที่เน้นการเรียนรู้เกี่ยวกับการพัฒนาโปรแกรม ซอฟต์แวร์ และระบบเครือข่าย รวมถึงการประยุกต์ใช้เทคโนโลยีสารสนเทศในองค์กรสมัยใหม่",
    details: [
      "การพัฒนาเว็บไซต์และแอปพลิเคชัน",
      "การวิเคราะห์และออกแบบระบบ",
      "ความปลอดภัยทางไซเบอร์ (Cybersecurity)",
      "การจัดการฐานข้อมูล",
      "เทคโนโลยีเครือข่ายและ IoT",
    ],
  };

  return (
    <div className="courses-container">
      <h1>{itCourse.name}</h1>
      <p>{itCourse.description}</p>
      <h2>รายละเอียดหลักสูตร:</h2>
      <ul>
        {itCourse.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
