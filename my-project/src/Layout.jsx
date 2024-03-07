import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

// so this is like a dynamic page where header and footer will remain constant, but the outlet will
// keep on changing.
// so what i understood is outlet is taking all the components and switching them dynamically
// according to the path. and it keeps header and footer constant, outlet either contains contact, home or about components.

function Layout() {
   return (
      <>
         <Header />
         <Outlet />
         {/* <Footer /> */}
      </>
   );
}

export default Layout;
