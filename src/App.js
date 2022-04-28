import { useEffect, useState } from "react";
import Header from "./layouts/Headers/Header";
import Footer from "./layouts/footer/Footer";
import Routs from "./Routs/Routs";

function App() {
  // Bello script is for detact the backend for removing header footer
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    let adminUri = window.location.pathname;
    let adminExp = new RegExp("^(/admin|/login)");
    if (adminExp.test(adminUri)) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);
  return (
    <div className="App">
      {isAdmin === !true ? <Header /> : ""}
      <Routs />
      {isAdmin === !true ? <Footer /> : ""}
    </div>
  );
}

export default App;
