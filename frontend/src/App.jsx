import React, { useState, useEffect } from "react";
import Cursor from "./common/Cursor";
import Starter from "./pages/Starter";
import Loader from "./common/Loader"; // Import the Loader component
import MainPageComponent2 from "./pages/MainPageComponent2";
import Footer from "./layout/Footer";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loader /> 
      ) : (
        <>
          <Cursor />
          <Starter />
          <Footer/>
        </>
      )}
      
    </div>
  );
}

export default App;
