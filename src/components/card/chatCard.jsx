import React from "react";
import BasicRating from "../Rating";
export function ChatCard({
  content,
  type = "",
  date = "",
  id = 0,
  rating = 0,
}) {
  return (
    <div
      className={`flex w-full gap-1 justify-start items-center mb-1 ${
        !type ? "bg-gray-200" : "bg-gray-300"
      } p-1 rounded-lg max-w-max text-gray-600`}
    >
      <div className="w-10 h-10 rounded-full flex justify-center items-center text-sm font-semibold bg-white">
        {type === "AI" ? "AI" : "YOU"}
      </div>
      <div className="flex flex-1 flex-col">
        <p className="flex-1">{content}</p>
        <div className=" flex items-center justify-between flex-wrap">
          {type && <BasicRating id={id} ratingValue={rating} />}
          <p className="text-xs text-right text-blue-400">{date}</p>
        </div>
      </div>
    </div>
  );
}