import { useLocation, useNavigate } from "react-router-dom";

function PhotoResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">Captured Photo</h2>

      {state && (
        <img
          src={state}
          alt="captured"
          className="mx-auto rounded shadow"
        />
      )}

      <button
        onClick={() => navigate("/list")}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to List
      </button>
    </div>
  );
}

export default PhotoResult;