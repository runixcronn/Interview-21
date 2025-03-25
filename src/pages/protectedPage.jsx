"use client";
import "@/app/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Captcha } from "./components/Captcha";

export default function ProtectedPage() {
  const router = useRouter();
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // veya bir loading gösterebilirsin
  }

  const navigateToHome = () => {
    router.push("/");
  };

  // Only render client-side content after component has mounted
  if (!isMounted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!captchaPassed ? (
        <Captcha onSuccess={() => setCaptchaPassed(true)} />
      ) : (
        <div className="text-xl font-semibold">Gizli mesaj</div>
      )}
      <button
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        onClick={navigateToHome}
      >
        Ana Sayfaya Dön
      </button>
    </div>
  );
}
