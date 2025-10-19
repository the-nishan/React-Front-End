import React from "react";
import { Helmet } from "react-helmet"; // for <head> tags like <title>

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center">
      <Helmet>
        <title>Moc webApp</title>
        <meta name="description" content="its a moc page"></meta>
      </Helmet>
      {/* starts here */}
      <h2>Log In</h2>
      <h2>Use your email and password to continue</h2>
      <h2>Email</h2>

      <input
        type="box"
        placeholder="Enter your email"
        class="border border-red-700 rounded-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <h2>Password</h2>
      <input
        type="box"
        placeholder="Enter your Password"
        class="border border-green-700 rounded-md p-2 w-64 focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* radio button */}
      <div class="p-4 space-y-2">
        <label className="inline-flex items left-2  space-x-2">
          <input
            type="radio"
            name="check"
            value="Remember Me2"
            className="form-radio text bg-red-500"
          />
          <span>Remember Me</span>
        </label>
      </div>
      <button class="  bg-blue-500 text-white font-semibold justify-start px-4 py-2 rounded hover:bg-green-600 active:bg-yellow-700 transition">
      Sign in
      </button>
      <div className="w-full flex justify-start p-4 bg-gray-100">
      <button class="  bg-pink-500 text-white font-semibold justify-start px-4 py-2 rounded hover:bg-green-600 active:bg-yellow-700 transition">
      Continue with google
      </button>
       <button class="  bg-violet-600 text-white font-semibold justify-end px-4 py-2 rounded hover:bg-green-600 active:bg-yellow-700 transition">
             Continue with GitHub
      </button>
      </div>
<div className="w full  flex  justify-between  p-4"> 
<p className="text-red-600 justify-between font-weight-700 space-x-6">Dont have an account?</p>
<p className="text-red-600  font-weight-700" >Sign up!</p>


  </div>
      {/*  ends here */}
    </div>
  );
}

export default App;