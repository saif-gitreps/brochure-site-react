import React from "react";

import ReactDOM from "react-dom/client";

import {
   Home,
   About,
   Contact,
   User,
   Github,
   GithubStatsLoader,
} from "./components/index";

import "./index.css";

import {
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";

// router provider takes a prop. method 1
// const router = createBrowserRouter([
//    {
//       path: "/",
//       element: <Layout />,
//       children: [
//          {
//             // here empty means just /
//             path: "",
//             element: <Home />,
//          },
//          {
//             // this means /about
//             path: "about",
//             element: <About />,
//          },
//          {
//             path: "contact",
//             element: <Contact />,
//          },
//       ],
//    },
// ]);

//method 2
// loader allows api calls to happen within the route, this works by calling the api when mouse is hovered
// over a link, the api will be called and will be stored in cache.
const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<Layout />}>
         <Route path="" element={<Home />} />
         <Route path="about" element={<About />} />
         <Route path="contact" element={<Contact />} />
         <Route path="user/:id" element={<User />} />
         <Route loader={GithubStatsLoader} path="github" element={<Github />} />
      </Route>
   )
);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
