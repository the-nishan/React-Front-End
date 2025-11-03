import React, { useEffect, useState } from "react";

const modeOptions = {
  INCREMENT:"increment",
  DECREMENT: "decrement"
}

function useStatePractice() {
  const [count, setCount] = useState(0);
  const  [mode,setMode] = useState(modeOptions.INCREMENT) // Default Mode Increment Considered!!

  useEffect(() => {
    if (count !== 0 && count % 5 === 0) {
      setCount(mode === modeOptions.INCREMENT ? count+1 : count-1);
    }
  }, [count,mode]);

  let funcIncrease = () => {
    setCount(count + 1);
    setMode(modeOptions.INCREMENT)
  };

  let funcDecrease = () => {
    setCount(count - 1);
    setMode(modeOptions.DECREMENT)
  };

  let RESET = () => {
    setCount(0);
    setMode(modeOptions.INCREMENT)
  };

  return (
    <div className="rounded-md h-screen bg bg-gray-100 justify-center items-center m-4">
      <div className="flex flex-row justify-center items-center">
        <div className="flex items-center justify-center mt-4 mb-10">
          <h2 className="text-amber-950 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl hover:animate-bounce">
            Counter App
          </h2>
        </div>
      </div>

      {/* */}

      <div className="flex justify-center items-center">
        <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-14">
          {count}
        </h1>
      </div>

      {/* */}

      <div className="flex justify-between mx-8">
        <div className="flex rounded-full bg-green-500 text-black w-20 h-20 justify-center items-center hover:bg-violet-500 hover:text-white hover:animate-pulse">
          <button onClick={funcIncrease}>
            <p className="font-bold text-5xl"> + </p>
          </button>
        </div>

        <div className="flex">
          <div className="flex rounded-2xl bg-indigo-200 w-40 h-13 justify-center items-center hover:bg-orange-200">
            <button onClick={RESET}>
              <p className="font-bold text-xl"> RESET </p>
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex rounded-full bg-red-500 w-20 h-20 justify-center items-center hover:bg-blue-500 hover:text-white hover:animate-pulse">
            <button onClick={funcDecrease}>
              <p className="text-5xl font-bold"> - </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default useStatePractice;
