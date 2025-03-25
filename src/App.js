import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import ProtectedPage from "./pages/ProtectedPage.jsx";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProtectedPage" element={<ProtectedPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Ana Sayfa</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => navigate("/ProtectedPage")}
      >
        Korunan Sayfaya Git
      </button>
    </div>
  );
};
