import React from "react";

const sessions = [
  { time: "09:00 AM", duration: "90 min" },
  { time: "11:00 AM", duration: "90 min" },
  { time: "01:00 PM", duration: "90 min" },
  { time: "03:00 PM", duration: "90 min" },
  { time: "05:00 PM", duration: "90 min" },
];

const Schedule = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col">
      <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">When would you like to join?</h2>
      {sessions.map((session, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-center justify-between border-b py-4 text-center sm:text-left"
        >
       
          <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
            <div className="mb-2 sm:mb-0 sm:mr-12">
              <p className="font-bold text-lg">{session.time}</p>
              <p className="text-gray-500">{session.duration}</p>
            </div>

            <img
              src="india.png"
              alt="Instructor"
              className="w-12 h-12 rounded-full sm:ml-40 mx-auto sm:mx-0"
            />
          </div>

        
          <div className="flex flex-col text-center sm:text-left mt-2 sm:mt-0">
            <p className="font-bold text-lg">.BARRE.</p>
            <p className="text-gray-500">Pilates & Yoga Studio</p>
          </div>
          
          <div className="flex flex-col text-center sm:text-left mt-2 sm:mt-0">
            <p className="text-gray-900">Jumeirah Village Circle</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
