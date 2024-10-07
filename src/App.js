/*import logo from './logo.svg';
import './App.css';*/

import React from "react";
import FlightSearch from "./flights-search";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <h1> Flight Search App </h1>
      <FlightSearch />
    </div>
    </LocalizationProvider>
  );
}

export default App;
