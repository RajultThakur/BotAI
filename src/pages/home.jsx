import React, { useEffect, useState } from "react";
import SuggestionCard from "../components/card/SuggestionCard";
import Input from "../components/Input";
import data from "../data/index.json";
import { ChatCard } from "../components/card/chatCard";
import { useRef } from "react";
import moment from "moment";
import PromptModal from "../components/QuestionModal";

function Home() {
  const [history, setHistory] = useState([]);
  const scroll = useRef(null);

  const handleClick = async (e, prompt) => {
    let response = data.find((ele) => ele.question.toLowerCase() === prompt.toLowerCase());
    if (!response) {
      response = {
        question: prompt,
        response:
          "As an AI model i don't have access to this detail. Therefor how can i assist you further?",
      };
    }
    response = {
      ...response,
      id: Date.now(),
      time: moment().format("lll"),
      rating: 0,
    };
    setHistory((prev) => [...prev, response]);
    localStorage.setItem("history", JSON.stringify([...history, response]));
  };

  useEffect(() => {
    if (!history) return;
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    if (!localStorage.getItem("history")) return;
    const data = JSON.parse(localStorage.getItem("history"));
    setHistory(data);
  }, []);

  return (
    <div className="px-10 max-md:px-1 flex flex-col gap-3">
      {history.length === 0 ? (
        <>
          <div className="intro gap-3 h-[250px] flex flex-col items-center justify-center">
            <h1 className="font-semibold text-3xl text-gray-300">
              How can I help you Today?
            </h1>
            <div className="w-20 h-20 rounded-full bg-[#dfdfdf]"></div>
          </div>
          <div className="card flex flex-wrap gap-3 items-center justify-evenly">
            <SuggestionCard prompt="start with 'hii', 'hello', 'how are you'" />
            <SuggestionCard prompt="tell me fun facts." />
            <SuggestionCard prompt="give me some idea" />
            <SuggestionCard prompt="create content calender" />
          </div>
        </>
      ) : (
        <div className="chatBox h-[calc(100vh-130px)] overflow-y-scroll flex flex-col gap-2">
          {history &&
            history.map((ele, idx) => {
              return (
                <div className="" key={idx}>
                  <ChatCard content={ele.question} />
                  <div ref={scroll}>
                    <ChatCard
                      content={ele.response}
                      type="AI"
                      rating={ele.rating}
                      date={ele.time}
                      id={ele.id}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      )}
      <div className="flex items-center max-sm:flex-wrap">
        <Input getResponse={handleClick} />
        <PromptModal question={history} />
      </div>
    </div>
  );
}

export default Home;
