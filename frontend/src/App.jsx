import React, { useState, useEffect } from "react";
import Cursor from "./common/Cursor";
import Starter from "./pages/Starter";
import Loader from "./common/Loader"; // Import the Loader component
import MainPageComponent2 from "./pages/MainPageComponent2";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process, replace this with actual data fetching if necessary
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Set a 2 second delay for the loader to disappear

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="">
      {loading ? (
        <Loader /> // Show loader when loading is true
      ) : (
        <>
          <Cursor />
          <Starter />
          <MainPageComponent2/>
        </>
      )}
    </div>
  );
}

export default App;
