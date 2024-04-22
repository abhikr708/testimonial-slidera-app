import React from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-gray-200 flex flex-col justify-center align-center w-[100vw] h-[100vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/6 mt-1 mx-auto"></div>
        <Testimonials reviews={reviews} />
      </div>

    </div>
  );
};

export default App;
