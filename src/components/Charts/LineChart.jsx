import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

// Chart.js komponentlarini ro'yxatdan o'tkazish
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

const MyLineChart = () => {
  // Chart ma'lumotlari
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Grafikka rang qo'shish
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // O'lchamni konteynerga mos qilish
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ": " + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div
      style={{
        background: "#1F2A40",
        padding: "20px",
        color: "#fff",
        width: "70%",  // Kichikroq qilish uchun kenglik
        height: "400px",// Bo'yini ham belgilaymiz
        margin: "30px 0",
      }}
    >
      <h3 style={{ fontSize: "18px", color: "#fff" }}>Revenue Generated</h3>
      <h5 style={{ fontSize: "20px", color: "#4cceac" }}>$59,342.32</h5>
      <div style={{ height: "330px" }}> {/* Chart uchun aniq balandlik */}
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MyLineChart;
