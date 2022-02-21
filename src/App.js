import "./App.css";
import React, { useState, useEffect } from "react";
import Home from "../src/components/Home";
import "./App.css";
import LoadingScreen from "../src/components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return <>{loading === false ? <Home /> : <LoadingScreen />}</>;
}

export default App;
