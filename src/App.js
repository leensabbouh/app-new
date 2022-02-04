import React, { useState } from "react";
import Bir from "./components/Bir/Bir";
import New from "./components/New/New";
import Curd from "./components/crud/Curd";
function App() {
  return (
    <div className="App">
      <Bir />
      <New />
      <Curd />
    </div>
  );
}

export default App;
