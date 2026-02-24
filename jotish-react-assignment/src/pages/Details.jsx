import { useLocation, useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { useRef } from "react";

function Details() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const webcamRef = useRef(null);

  if (!state) {
    navigate("/list");
    return null;
  }

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    navigate("/photo", { state: imageSrc });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow">
      <button
        onClick={() => navigate("/list")}
        className="mb-4 bg-gray-200 px-3 py-1 rounded"
      >
        Back
      </button>

      <h2 className="text-xl font-semibold mb-4">Employee Details</h2>

      <div className="mb-6 space-y-1">
        <p><b>Name:</b> {state[0]}</p>
        <p><b>Role:</b> {state[1]}</p>
        <p><b>City:</b> {state[2]}</p>
        <p><b>Salary:</b> {state[5]}</p>
      </div>

      <div className="max-w-md">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-xl border shadow-sm"
        />
        <button
          onClick={capture}
          className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
        >
          Capture Photo
        </button>
      </div>
      </div>
    </div>
  );
}

export default Details;