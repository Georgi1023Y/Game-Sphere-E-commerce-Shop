import React from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Games from "./components/Games";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-darkLinear">
      <div className="flex flex-row sm:gap-6 md:gap-10 lg:gap-20 xl:gap-40">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col">
          <div>
            <Search />
          </div>
          <div>
            <Games />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
