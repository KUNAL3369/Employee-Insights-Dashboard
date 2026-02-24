import axios from "axios";

export const fetchEmployees = async () => {
  const res = await axios.post(
    "https://backend.jotish.in/backend_dev/gettabledata.php",
    {
      username: "test",
      password: "123456",
    }
  );

  return res.data;
};