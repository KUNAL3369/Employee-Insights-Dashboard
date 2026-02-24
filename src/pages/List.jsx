import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/api";
import { useNavigate } from "react-router-dom";

function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchEmployees();
        setData(res?.TABLE_DATA?.data || []);
      } catch (err) {
        console.error("API ERROR:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  if (loading) {
     return (
        <div className="p-6 text-center text-gray-500">
          Loading employees...
        </div>
     );
    }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Employees</h1>

        <div className="flex gap-2">
           <button
            onClick={() => navigate("/charts")}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
            View Chart
        </button>

        <button
          onClick={() => {
            localStorage.removeItem("isAuth");
            navigate("/");
          }}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
    
    <div className="grid gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate("/details", { state: item })}
            className="p-4 border rounded cursor-pointer hover:bg-gray-800 hover:text-white hover:shadow-sm transition"
          >
            <p className="font-medium">{item[0]}</p>

            <p className="text-sm text-gray-500">
              Role: {item[1]}
            </p>

            <p className="text-sm text-gray-500">
              City: {item[2]}
            </p>

            <p className="text-sm text-gray-500">
              Salary: {item[5]}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default List;