"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-4">
      <h1 className="text-2xl font-bold">Count: {count}</h1>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
