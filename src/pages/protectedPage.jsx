import "@/app/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Captcha bileşenini dinamik olarak import ediyoruz ve ssr: false ile sunucu tarafında render edilmesini engelliyoruz
const DynamicCaptcha = dynamic(
  () => import("./components/Captcha").then((mod) => mod.Captcha),
  {
    ssr: false,
  }
);

export default function ProtectedPage() {
  const router = useRouter();
  const [captchaPassed, setCaptchaPassed] = useState(false);

  const navigateToHome = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {!captchaPassed ? (
        <DynamicCaptcha onSuccess={() => setCaptchaPassed(true)} />
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

// Captcha bileşeni ayrı bir dosyaya taşındı
