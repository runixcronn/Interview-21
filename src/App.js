"use client";

import React, { useState } from "react";
import ProtectedPage from "./components/ProtectedPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div>
      {currentPage === "home" ? (
        <Home navigate={() => setCurrentPage("protected")} />
      ) : (
        <ProtectedPage navigate={() => setCurrentPage("home")} />
      )}
    </div>
  );
}

const Home = ({ navigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Ana Sayfa</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={navigate}
      >
        Korunan Sayfaya Git
      </button>
    </div>
  );
};
