import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { CameraList } from "./components/CameraList";
import { LensList } from "./components/LensList";
import { TeleconverterList } from "./components/TeleconverterList";
import { FocalLengthGraph } from "./components/FocalLengthGraph";
import { Footer } from "./components/Footer";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalProvider>
        <div className="listContainer equipmentRow">
          <CameraList />
          <LensList />
          <TeleconverterList />
        </div>
        <FocalLengthGraph />
      </GlobalProvider>
      <Footer />
    </div>
  );
}

export default App;
