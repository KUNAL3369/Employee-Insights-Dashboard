import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import { useNavigate } from "react-router-dom";

function Charts() {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchEmployees();
        const rows = res?.TABLE_DATA?.data || [];

        const formatted = rows.slice(0, 10).map((item) => ({
          name: item[0],
          salary: Number(item[5].replace(/[^0-9.-]+/g, "")),
        }));

        setChartData(formatted);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading chart...</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-start pt-10 px-4">
      <div className="w-full max-w-4xl">

        <button
          onClick={() => navigate("/list")}
          className="mb-4 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 transition"
        >
          Back
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Salary Bar Chart (First 10 Employees)
        </h2>

        <div className="w-full h-[360px] bg-white p-5 rounded-2xl border shadow-sm">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip />
              <Bar dataKey="salary" fill="#2563eb" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}

export default Charts;