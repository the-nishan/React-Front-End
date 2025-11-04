// step-1

import react, {useState, useEffect} from 'react';

const modeOptions = {
  INCREMENT: "increment",
  DECREMENT: "decrement"
}

//  step-2

const useStatePractice =()=>{
const [count, setCount]=useState(0)
const [mode, setMode]=useState(modeOptions.INCREMENT);
}

 useEffect(()=>{
  if(count!==0 && count%5===0) {
    setCount(mode===modeOptions.INCREMENT?count+1:count-1);

  }

},[count,mode]);

// step-3