import React, { useState } from "react"; 

import { Helmet } from "react-helmet"; 

 

function Counter() { 

const [count, setCount] = useState(0); 

 

return ( 

<div className="flex flex-col items-center justify-center h-screen bg-green-100"> 

<h2 className="text-2xl font-bold mb-4 text-gray-800">React Web Counter</h2> 

<h1 className="text-5xl font-extrabold mb-6 text-blue-600">{count}</h1> 

<button 

className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors" 

onClick={() => setCount(count + 5)} 

> 

Increase 

</button> 

</div> 

); 

} 
export default Counter;
 

 

 