import Header from "../components/Header/App";
import Nav from "../components/Nav/App";
import Footer from "../components/Footer/App";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
       <>
         <Header />
         <Nav />
         <Outlet />
         <Footer />
       </>
    )
}


export default Layout;