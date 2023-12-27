import React from "react";
import Navbar from "./components/Navbar";
import NewTask from "./components/NewTask";
import Sorting from "./components/Sorting";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import Description from "./components/Description";

function App() {
  return (
    <div className="App md:relative">
      <Navbar />
      <div className="md:w-[85%] mx-auto w-[80%] flex items-center md:items-end justify-end lg:flex-row flex-col ">
        <Sorting />
        <NewTask />
      </div>
      <div>
        <Tasks />
        {/* <Description className="w-1/4" /> */}
      </div>
    </div>
  );
}

export default App;
