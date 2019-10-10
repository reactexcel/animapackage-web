import React from 'react';
import './createInvoice.css';
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Billing from "./components/Billing";
import CenterHeader from "./components/CenterHeader";
import Chart from "./components/Chart";
import PopUp from "./components/PopUp";

function App() {
  return (
    <div className="createinvoice">
      <div className="content-wrapper">
        <div class="bgoverviewbilling">
            <div class="rectangle"/>
        </div>
        <div  className="billingmainpage" >
          <div className="background"/>
          <SideMenu/>
          <CenterHeader/>
          <Header/>
        </div>
        <Billing/>
        <Chart/>
        <PopUp/>
      </div>
    </div>
  );
}

export default App;
