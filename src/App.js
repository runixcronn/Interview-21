"use client";
import React from "react";
import { useRouter } from "next/navigation";
// https://nextjs.org/docs/pages/api-reference/functions/use-router

export default function App() {
  const router = useRouter();

  // Next.js routing ile sayfaya yönlendirme
  const navigateToProtectedPage = () => {
    router.push("/protectedPage");
  };

  return (
    <div>
      <Home navigate={navigateToProtectedPage} />
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
