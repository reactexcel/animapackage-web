import React from "react";
import invoiceShape from "../img/create-invoice-shape-2@2x.png"
import invoicePath2 from "../img/create-invoice-path@2x.png";
import invoicePath1 from "../img/create-invoice-path-1@2x.png";
import createInvoice from "../img/create-invoice-oval@17.85714340209961x.png";
import createInvoiceSync from "../img/create-invoice-sync@2x.png";
import home from "../img/create-invoice-icon--home-ol@20.83333396911621x.png";
import openBook from "../img/create-invoice-icon--academic-o@23.809524536132812x.png";
import dollar from "../img/create-invoice-icon--bill-o@23.809524536132812x.png";
import bell from "../img/create-invoice-uea3c@31.25x.png";
import hamburge from "../img/create-invoice-morevert---material@125x.png";
import three from "../img/create-invoice-path-2@2x.png";
import one from "../img/create-invoice-path-3@2x.png";

function Header() {
    return (
        <div className="toolbar">
            <div className="toolbarbg">
            </div>
            <div className="iconcalendarb">
                <div className="background1">
                </div>
                <img anima-src="./img/create-invoice-shape-2@2x.png" className="shape" src={invoiceShape}/>
                <img anima-src="./img/create-invoice-path@2x.png" className="path" src={invoicePath2}/>
                <img anima-src="./img/create-invoice-path-1@2x.png" className="path1" src={invoicePath1}/>
                <img anima-src="./img/create-invoice-path-2@2x.png" className="path2" src={three}/>
                <img anima-src="./img/create-invoice-path-3@2x.png" className="path3" src={one}/>
            </div>
            <div className="iconcalendarbcopy">
                <div className="background1">
                </div>
                <img anima-src="./img/create-invoice-shape-2@2x.png" className="shape" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src="./img/create-invoice-path@2x.png" className="path" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src="./img/create-invoice-path-1@2x.png" className="path1" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/>
                <img anima-src="./img/create-invoice-path-2@2x.png" className="path2" src={three}/>
                <img anima-src="./img/create-invoice-path-3@2x.png" className="path3" src={one}/>
            </div>
            <img anima-src="./img/create-invoice-icon--bill-o@23.809524536132812x.png" className="iconbillo" src={dollar}/>
            <img anima-src="./img/create-invoice-uea3c@31.25x.png" className="uea3c" src={bell}/>
            <img anima-src="./img/create-invoice-icon--academic-o@23.809524536132812x.png" className="iconacademico" src={openBook}/>
            <img anima-src="./img/create-invoice-icon--home-ol@20.83333396911621x.png" className="iconhomeol" src={home}/>
            <img anima-src="./img/create-invoice-morevert---material@125x.png" className="morevertmaterial" src={hamburge}/>
            <div className="groupsa">
            </div>
            <div className="membersa">
            </div>
            <div className="namea">
            </div>
            <div className="groups">
                Groups
            </div>
            <div className="members">
                Members
            </div>
            <div className="name">
                SIS
            </div>
            <img anima-src="./img/create-invoice-oval@17.85714340209961x.png" className="oval" src={createInvoice}/>
            <div className="iconsync">
                <div className="background1">
                </div>
                <img anima-src="./img/create-invoice-sync@2x.png" className="sync" src={createInvoiceSync}/>
            </div>
        </div>
    );
  }

  export default Header;