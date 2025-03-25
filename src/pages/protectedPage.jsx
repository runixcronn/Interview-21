import "../app/globals.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Captcha from "./components/Captcha";

export default function ProtectedPage() {
  const navigate = useNavigate();
  const [captchaPassed, setCaptchaPassed] = useState(false);

  const navigateToHome = () => {
    navigate("/");
  };

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
