import React, { useState } from "react";

function useStatePractice() {
  const [count, newFunc] = useState(0);

  return (
    <div className="h h-screen bg bg-gray-100 justify-center items-center m-4">
      <div className="flex flex-row justify-center items-center">
      <div className="flex items-center justify-center mt-4 mb-10">
        <h2 className="text-amber-950 font-bold text-6xl">Counter App</h2>
      </div>
      </div>

      {/*  */}
      <div className="flex justify-center items-center">
<h1 className="font-extrabold text-8xl mb-5">
  {count}
</h1>
</div>
      {/*  */}


<div className="flex justify-between mx-8">
      <div className="flex rounded-full bg-green-500 w-20 h-20 justify-center items-center">
<button onClick={()=> newFunc (count+1)}>
 <p className="font-bold text-5xl"> + </p>
</button>
</div>

<div className="flex">
      <div className="flex rounded-lg bg-indigo-200 w-20 h-8 justify-center items-center">
<button onClick={()=> newFunc (count*0)}>
 <p className="font-bold text-xl"> RESET </p>
</button>
</div>
</div>


<div className="flex">
<div className="flex rounded-full bg-red-500 w-20 h-20 justify-center items-center">
<button onClick={()=> newFunc(count-1)}>
 <p className="text-5xl font-bold"> - </p>
</button>
</div>
</div>

</div>


    </div>

    
  );
}
export default useStatePractice;
