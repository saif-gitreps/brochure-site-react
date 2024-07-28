import { Link } from "react-router-dom";

export default function Home() {
   return (
      <div className="mx-auto max-w-6xl space-y-10 my-10">
         <aside className="flex justify-between space-y-1 flex-col items-center sm:mx-20 sm:flex-row mt-10">
            <div className="flex justify-center">
               <img
                  className="sm:w-96 w-72 rounded-3xl"
                  src="/bookstore.jpg"
                  alt="image1"
               />
            </div>
            <div className="space-y-2 flex flex-col justify-center">
               <h2 className="flex flex-col text-2xl font-bold sm:text-5xl">
                  Download Now
                  <span className="sm:block text-4xl">Lorem Ipsum</span>
               </h2>

               <Link
                  className="inline-flex text-white items-center px-6 py-4 font-medium bg-green-700 rounded-lg hover:text-green-500 duration-300"
                  to="/"
               >
                  <svg
                     fill="white"
                     width="24"
                     height="24"
                     xmlns="http://www.w3.org/2000/svg"
                     fillRule="evenodd"
                     clipRule="evenodd"
                  >
                     <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                  </svg>
                  &nbsp; Download now
               </Link>
            </div>
         </aside>

         <div className="flex flex-col justify-center">
            <div className="flex justify-center">
               <img
                  className="sm:w-96 w-72 rounded-3xl"
                  src="/bookstore.jpg"
                  alt="image2"
               />
            </div>
            <h1 className="text-center text-2xl sm:text-5xl py-5 font-medium">
               Lorem Ipsum Yojo.
            </h1>
         </div>
         <h1 className="text-left text-lg sm:text-2xl py-5 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat magnam vitae
            illum. Corporis explicabo est laboriosam odio numquam? Et, eius velit
            reprehenderit praesentium ut porro aliquam illum amet quibusdam excepturi..
         </h1>
      </div>
   );
}
