import { useState, useEffect } from "react";

const Captcha = ({ onSuccess }) => {
  const [randomNumber, setRandomNumber] = useState(
    () => Math.floor(Math.random() * 6) + 1
  );

  const [selectedNumber, setSelectedNumber] = useState(null);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 6) + 1);
  }, []);

  const handleVerify = () => {
    if (selectedNumber === randomNumber) {
      onSuccess();
    } else {
      alert("Yanlış seçim, tekrar deneyin!");
    }
  };

  return (
    <div className="text-center">
      <h2 className="mb-4">Lütfen aşağıdaki sayıyı seçin: {randomNumber}</h2>
      <div className="flex gap-2 justify-center">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <img
            key={num}
            src={`https://via.placeholder.com/50?text=${num}`}
            alt={`captcha-${num}`}
            className="cursor-pointer border-2 border-gray-300 p-2 hover:border-blue-500"
            onClick={() => setSelectedNumber(num)}
          />
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        onClick={handleVerify}
      >
        Doğrula
      </button>
    </div>
  );
};

export default Captcha;
