import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/footer";

function MainLayout() {
  return (
    <>
      <Header/>
      <div className="container mx-auto p-6">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;