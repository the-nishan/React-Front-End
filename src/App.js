import React from "react";
import { Helmet } from "react-helmet"; // for <head> tags like <title>

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col rounded-md m-4">
      <Helmet>
        <title>Moc webApp</title>
        <meta name="description" content="its a moc page test 2"></meta>
      </Helmet>
      {/* starts here */}

      {/*  */}
      <div className="pb-6">
      <h2 className="text-4xl font-bold">Log in</h2>
      <h2>Use your email and password to continue</h2>
      </div>
      {/*  */}
      <div className="pb-6">
      <h2 className="font-bold">Email</h2>
      <input
        type="box"
        placeholder="📧   Enter your Email"
        class="w-full border border-red-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      </div>
      {/*  */}
      <div className="w-full flex justify-between">
        <h2 className="font-bold">Password</h2>
        <a href=" #" className="text-red-700 font-bold">Forget Password!</a>
      </div>
      {/*  */}
      <div className="py-6">
      <input
        type="box"
        placeholder="🔐   Enter your Password"
        class="w-full border border-red-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      </div>
      {/* radio button */}
      <div class="py-2 w-full flex justify-between">
        {/*  */}
        <label className="inline-flex items left-2  space-x-1">
          <input
            type="checkbox"
            name="check"
            value="check"
          />
          <span className="text-lg">Remember me</span>
        </label>
        {/*  */}
        <p className="text-md">By clicking you will agree to our {" "}<a href=" #" className="text-xs font-extrabold text-blue-900">term's</a></p>
      </div>
      {/*  */}
      <button class="  bg-blue-500 text-white font-semibold justify-start px-4 py-2 rounded hover:bg-green-600 active:bg-yellow-700 transition">
        Sign in
      </button>
      {/*  */}
<div  className="mx-auto bg-black w-8 h-6 ">
      <p className="text-center text-sm text-white"  >or</p>
      </div>
      {/*  */}
      <div className="flex justify-between">
        <button href="https://www.google.com/imghp?hl=en" class="  bg-pink-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 active:bg-yellow-700 transition">
          Continue with google
        </button>
        <button class="  bg-violet-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 active:bg-yellow-700 transition">
          Continue with GitHub
        </button>
      </div>
      {/*  */}
      <div className="flex  justify-between">
        <p className="text-black font-weight-700">
          Don't have an account?
        </p>
       <a href=" #" class="text-blue-600 text-xl font-bold">Sign up!</a>
        
      </div>
      {/*  ends here */}
    </div>
  );
}

export default App;
