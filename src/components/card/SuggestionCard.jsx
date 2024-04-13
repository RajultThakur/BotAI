import React from "react";

export default function SuggestionCard({ prompt }) {
  return (
    <div className="w-[48%] bg-[#f4f2f2] p-2 shadow-lg rounded-lg">
      <h1>{prompt}</h1>
      <p>Get immediate AI generated response.</p>
    </div>
  );
}
