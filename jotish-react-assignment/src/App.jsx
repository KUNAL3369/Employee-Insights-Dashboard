import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import List from "./pages/List";
import Details from "./pages/Details";
import PhotoResult from "./pages/PhotoResult";
import ProtectedRoute from "./components/ProtectedRoute";
import Charts from "./pages/Charts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/list"
          element={
            <ProtectedRoute>
              <List />
            </ProtectedRoute>
          }
        />

        <Route
         path="/details"
         element={
           <ProtectedRoute>
             <Details />
           </ProtectedRoute>
         }
        />
          <Route    
          path="/charts"
          element={
            <ProtectedRoute>
              <Charts />
            </ProtectedRoute>
          }
        />

        <Route
         path="/photo"
         element={
           <ProtectedRoute>
             <PhotoResult />
           </ProtectedRoute>
         }
        />
        <Route path="/photo" element={<PhotoResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;