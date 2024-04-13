import React, { useState } from "react";

export default function Input({ getResponse }) {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="prompt p-2 max-sm:px-0 max-sm:flex-wrap flex gap-2 relative bottom-0 flex-1">
      <input
        className="text-lg bg-gray-100 shadow-xl flex-1 p-1 px-2 outline-none rounded-lg border-[1px] border-t-0 text-gray-500"
        type="text"
        value={prompt}
        placeholder="ask anything with AI"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="bg-gray-400 text-white font-semibold p-1 text-xl px-3 rounded-lg"
        onClick={(e) => getResponse(e, prompt)}
      >
        Ask
      </button>
    </div>
  );
}
