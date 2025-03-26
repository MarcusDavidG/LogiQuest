import React from "react";

const HowToPlay = () => {
  return (
    <div className="bg-black text-white py-16 px-6 text-center w-full">
      <h2 className="text-4xl font-bold">How To Play</h2>

      <p className="mt-6 text-xl font-bold text-start md:pl-64 pl-4">
        Welcome to LogiQuest!
      </p>
      <p className="mt-2 text-lg text-start md:pl-64 pl-4">
        Get ready to test your logic and knowledge! Here’s a quick guide to help
        you start your journey.
      </p>

      <div className="flex flex-col md:flex-row items-center mt-12 md:ml-56 px-4 md:px-10 ">
        {/* Left Section */}
        <div className="flex flex-col space-y-6">
          <div className="bg-[#033330] text-white w-72 p-6 border-4 border-red-500 transform -skew-x-12"
          style={{ borderImage: "linear-gradient(to bottom, red, yellow) 1" }}>
            <h3 className="font-bold text-lg">1. Choose Your Game Mode</h3>
            <p className="text-sm mt-3">
              Select from various modes like Classic, Challenge, Multiplayer,
              and more. Each mode offers a unique experience!
            </p>
          </div>
          <div className="bg-[#033330] text-white w-72 p-6 border-4 border-yellow-500 skew-x-[10deg]"
          style={{ borderImage: "linear-gradient(to bottom, yellow, Red) 1" }}>
            <h3 className="font-bold text-lg">2. Understand the Rules</h3>
            <p className="text-sm mt-3">
              Each question will present you with four options (A, B, C, D). You
              have a limited time (usually 2 minutes) to answer each question.
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="relative w-full md:w-[36rem] mt-8 md:mt-0">
          <div
            className="absolute inset-0"
            style={{
              clipPath:
                "polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 6% 100%, 0% 50%)",
              background: "linear-gradient(to bottom, red, yellow)",
              zIndex: 1,
            }}
          />
          <div
            className="relative text-white p-8 md:p-16 m-1"
            style={{
              clipPath:
                "polygon(7% 0%, 93% 0%, 100% 50%, 93% 100%, 6% 100%, 0% 50%)",
              background: "#0F3D3E",
              zIndex: 2,
            }}
          >
            <h4 className="text-xl font-bold text-start">3. Make Your Choice</h4>
            <p className="text-lg mt-3 leading-relaxed text-start">
              Click on your selected answer. If you're unsure, use lifelines to
              help you:
            </p>
            <ul className="text-lg mt-4 list-disc list-inside space-y-3 text-left">
              <li>Remove Two Wrong Answers: Eliminates two incorrect options.</li>
              <li>
                Get Probability Insights: See the likelihood of each option being
                correct.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-8 mt-8 md:mt-0">
          <div
            className="relative bg-[#0F3D3E] text-white p-6 border-4 border-red-500 skew-x-[10deg] w-72"
            style={{ borderImage: "linear-gradient(to bottom, red, yellow) 1" }}
          >
            <h4 className="text-lg font-bold">4. Track Your Progress</h4>
            <p className="text-sm mt-1">
              Your score will be based on accuracy and speed.
            </p>
            <p className="text-sm">
              Compete for high scores on the leaderboard!
            </p>
          </div>
          <div className="bg-[#033330] text-white p-6 border-4 border-red-500 transform -skew-x-12 w-72"
          style={{ borderImage: "linear-gradient(to bottom, yellow, Red) 1" }}>
            <h3 className="font-bold text-lg">5. Enjoy and Share!</h3>
            <p className="text-sm mt-3">
              Share your achievements with friends and challenge them to beat
              your score!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
