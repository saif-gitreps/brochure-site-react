import { Link, NavLink } from "react-router-dom";

export default function Header() {
   return (
      <header className="bg-neutral-100 shadow sticky z-50 top-0">
         <nav className="flex justify-between items-center mx-auto max-w-6xl h-16">
            <Link to="/" className="flex items-center">
               <img src="fav.png" className="h-10 sm:h-12" alt="Logo" />
            </Link>

            <div className="flex flex-row space-x-3">
               <ul className="flex justify-end items-center space-x-4 font-medium lg:flex-row lg:mt-0">
                  <li>
                     <NavLink
                        to="/"
                        className={({ isActive }) =>
                           `block duration-200 ${
                              isActive ? "text-green-700" : "text-gray-700"
                           } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                        }
                     >
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/about"
                        className={({ isActive }) =>
                           `block duration-200 ${
                              isActive ? "text-green-700" : "text-gray-700"
                           } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                        }
                     >
                        About
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                           `block duration-200 ${
                              isActive ? "text-green-700" : "text-gray-700"
                           } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                        }
                     >
                        Contact
                     </NavLink>
                  </li>
               </ul>
               <div className="flex items-center text-white bg-green-700 font-medium rounded-lg p-2 text-sm focus:outline-none space-x-3">
                  <Link to="/login" className="duration-300 hover:text-green-500">
                     Login
                  </Link>
                  <p>|</p>
                  <Link to="/signup" className="duration-300 hover:text-green-500">
                     Sign Up
                  </Link>
               </div>
            </div>
         </nav>
      </header>
   );
}
