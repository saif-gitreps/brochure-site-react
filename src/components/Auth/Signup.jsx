function Signup() {
   return (
      <div className="mx-auto max-w-6xl sm:h-screen space-y-10 my-10 flex justify-center">
         <form className="bg-neutral-200 rounded-xl w-80 h-96 p-6 flex flex-col justify-center ">
            <div>
               <h1 className="text-xl font-semibold">Sign Up</h1>
            </div>
            <div className="flex flex-col mt-2">
               <label htmlFor="fullname" className="hidden">
                  Email
               </label>
               <input
                  type="text"
                  name="fullname"
                  id="email"
                  placeholder="Full Name"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
               />
            </div>
            <div className="flex flex-col mt-2">
               <label htmlFor="email" className="hidden">
                  Email
               </label>
               <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
               />
            </div>
            <div className="flex flex-col mt-2">
               <label htmlFor="tel" className="hidden">
                  Password
               </label>
               <input
                  type="password"
                  name="tel"
                  id="tel"
                  placeholder="Password"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
               />
            </div>
            <div className="flex flex-col mt-2">
               <label htmlFor="tel" className="hidden">
                  Confirm Password
               </label>
               <input
                  type="password"
                  name="tel"
                  id="tel"
                  placeholder="Confirm Password"
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-green-500 focus:outline-none"
               />
            </div>

            <button
               type="submit"
               className="md:w-32 bg-green-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-green-500 transition ease-in-out duration-300"
            >
               Submit
            </button>
         </form>
      </div>
   );
}

export default Signup;
