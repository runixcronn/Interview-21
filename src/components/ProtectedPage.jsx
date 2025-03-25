"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Captcha from "./Captcha";

export default function ProtectedPage({ navigate }) {
  const router = useRouter();
  const [captchaPassed, setCaptchaPassed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!captchaPassed ? (
        <Captcha onSuccess={() => setCaptchaPassed(true)} />
      ) : (
        <div className="text-xl font-semibold">Gizli mesaj</div>
      )}
      <button
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        onClick={navigate}
      >
        Ana Sayfaya Dön
      </button>
    </div>
  );
}
