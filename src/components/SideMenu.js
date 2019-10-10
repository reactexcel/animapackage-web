import React from "react";
import violetBackground from "../img/create-invoice-rectangle-10-copy@2x.png";
import dollar from "../img/create-invoice-coin@27.77777862548828x.png";
import overview from "../img/create-invoice-graph-1@38.46154022216797x.png";
import setting from "../img/create-invoice-shape@2x.png";
import line2 from "../img/create-invoice-line-copy-2.png";
import rectangle10 from "../img/create-invoice-rectangle-10.png";

function SideMenu() {
    return (
        <div className="sidebarbilling2">
            <div className="background1">
            </div>
            <img anima-src="./img/create-invoice-rectangle-10.png" className="rectangle10" src={rectangle10}/>
            <img anima-src="./img/create-invoice-line-copy-2.png" className="linecopy2" src={line2}/>
            <img anima-src="./img/create-invoice-rectangle-10-copy@2x.png" className="rectangle10copy" src={violetBackground}/>
            <div className="overview">
                Overview
            </div>
            <div className="iconstats">
                <img anima-src="./img/create-invoice-graph-1@38.46154022216797x.png" className="graph" src={overview}/>
            </div>
            <div className="setting">
                Setting
            </div>
            <div className="iconsetting">
                <div className="background2">
                </div>
                <img anima-src="./img/create-invoice-shape@2x.png" className="shape" src={setting}/>
            </div>
            <div className="billing">
                Billing
            </div>
            <img anima-src="./img/create-invoice-coin@27.77777862548828x.png" className="coin" src={dollar}/>
            <div className="dashboard">
                <span className="span1">Dashboar</span><span className="span2">d</span>
            </div>
            <div className="new">
                <div className="rectangle">
                </div>
                <div className="newinvoice">
                    New Invoice
                </div>
                <div className="label1">
                    +
                </div>
            </div>
            <div className="sent">
                <div className="a3">
                    3
                </div>
                <div className="a1">
                    1
                </div>
                <div className="draft">
                    Draft
                </div>
                <div className="a2">
                    2
                </div>
                <div className="a25">
                    25
                </div>
                <div className="scheduled">
                    Scheduled
                </div>
                <div className="sent1">
                    Sent
                </div>
                <div className="cancelled">
                    Cancelled
                </div>
            </div>
        </div>
    )
}

export default SideMenu;