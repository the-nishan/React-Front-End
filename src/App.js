import React from "react";
import { Helmet } from "react-helmet"; // for <head> tags like <title>

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-black flex flex-col rounded-md m-5">
      <Helmet>
        <title>Moc webApp</title>
        <meta name="description" content="its a moc page"></meta>
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
        <h2 className="font-bold">Forget Password!</h2>
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
            type="radio"
            name="check"
            value="√"
            className="appearance-none w-5 h-5 border bg-red-200 border-gray-400 rounded checked:bg-green-500 checked:border-black checked:"
          />
          <span>Remember me</span>
        </label>
        {/*  */}
        <p className="">By clicking you will agree to our terms</p>
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
        <button class="  bg-pink-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 active:bg-yellow-700 transition">
          Continue with google
        </button>
        <button class="  bg-violet-600 text-white font-semibold px-4 py-2 rounded hover:bg-green-600 active:bg-yellow-700 transition">
          Continue with GitHub
        </button>
      </div>
      {/*  */}
      <div className="flex  justify-between">
        <p className="text-black font-weight-700">
          Dont have an account?
        </p>
        <p className="text-blue-600 text-xl  font-weight-700">Sign up!</p>
      </div>
      {/*  ends here */}
    </div>
  );
}

export default App;
