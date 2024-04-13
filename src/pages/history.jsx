import React, { useState, useEffect } from "react";
import { ChatCard } from "../components/card/chatCard";

function History() {
  const [history, setHistory] = useState([]);
  const clearHistory = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("history"));
    setHistory(data);
  }, []);
  return (
    <>
      <div className="chatBox h-[calc(100vh-130px)] overflow-y-scroll flex flex-col gap-2 p-2 px-10 max-sm:px-1">
        {history ? (
          history.map((ele, idx) => {
            return (
              <div className="" key = {idx}>
                <ChatCard content={ele.question} />
                <ChatCard
                  className=""
                  content={ele.response}
                  type="AI"
                  rating={ele.rating}
                  date={ele.time}
                  id={ele.id}
                />
              </div>
            );
          })
        ) : (
          <h1 className="w-full text-2xl font-semibold text-gray-400 text-center">
            History not found!
          </h1>
        )}
      </div>
      <div className="flex mt-2 items-center justify-center">
        <button
          className="items-center p-2 py-1 text-white rounded-lg font-semibold bg-red-500"
          onClick={clearHistory}
          disabled={!history}
        >
          Clear
        </button>
      </div>
    </>
  );
}
export default History;
