import { Link } from "react-router-dom";

export default function Footer() {
   return (
      <div className="bg-neutral-100 border-y  p-4 py-6 lg:py-8">
         <div className="md:flex md:justify-between mx-auto max-w-6xl">
            <div className="mb-6 md:mb-0">
               <Link to="/" className="flex items-center">
                  <img src="/fav.png" className="mr-3 h-16" alt="Logo" />
               </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
               <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                     Resources
                  </h2>
                  <ul className="text-gray-500 font-medium space-y-3">
                     <li>
                        <Link to="/" className="hover:underline">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link to="/about" className="hover:underline">
                           About
                        </Link>
                     </li>
                     <li>
                        <Link to="/about" className="hover:underline">
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                     Follow us
                  </h2>
                  <ul className="text-gray-500 font-medium space-y-3">
                     <li>
                        <Link to="/" className="hover:underline">
                           Facebook
                        </Link>
                     </li>
                     <li>
                        <Link to="/" className="hover:underline">
                           Instagram
                        </Link>
                     </li>
                     <li>
                        <Link to="/" className="hover:underline">
                           Whatsapp
                        </Link>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                     Legal
                  </h2>
                  <ul className="text-gray-500 font-medium space-y-3">
                     <li>
                        <Link to="#" className="hover:underline">
                           Privacy Policy
                        </Link>
                     </li>
                     <li>
                        <Link to="#" className="hover:underline">
                           Terms &amp; Conditions
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
               <span className="text-sm text-gray-500 sm:text-center">
                  © 2024 Bookstore.Inc All Rights Reserved.
               </span>
            </div>
         </div>
      </div>
   );
}
