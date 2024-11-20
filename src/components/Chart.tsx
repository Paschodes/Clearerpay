import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const data = {
    labels: ["1", "8", "15", "22", "31"],
    datasets: [
      {
        label: "Money in N1,000,000",
        data: [1000000, 2000000, 3000000, 2500000, 100000],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.3, // Smooth curve
        fill: false,
      },
      {
        label: "Money out N1,000,000",
        data: [500000, 1500000, 2500000, 2000000, 100000],
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        tension: 0.3, // Smooth curve
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Money out/Money in",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount (₦)",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Chart;
