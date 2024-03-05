import React from "react";
import ReactDOM from "react-dom/client";
import { Home, About, Contact } from "./components/index";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";

// router provider takes a prop.
const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            // here empty means just /
            path: "",
            element: <Home />,
         },
         {
            // this means /about
            path: "about",
            element: <About />,
         },
         {
            path: "contact",
            element: <Contact />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
