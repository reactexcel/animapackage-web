import React from "react";
import receipents from "../img/create-invoice-fill-8@2x.png";
import rectangle from "../img/create-invoice-rectangle.png";
import iconChecked from "../img/create-invoice-shape-3@2x.png";
import iconCheckedCopy from "../img/create-invoice-shape-4@2x.png";
import line from "../img/create-invoice-line-4@2x.png";
import invoicePath from "../img/create-invoice-path-8@2x.png";
import invoiceLine from "../img/create-invoice-line-2-1@2x.png";
import line2 from "../img/create-invoice-line-copy-11.png";
import line3 from "../img/create-invoice-line-copy-11.png";
import line4 from "../img/create-invoice-line-copy-11.png";
import invoiceGrapgh from "../img/create-invoice-graph-1@38.46154022216797x.png";
import dropdownIcon from "../img/create-invoice-xmlid622@2x.png";


function PopUp(){
    return(
        <>
            <div className="group">
                <div className="sendinvoice">
                    <div className="background">
                    </div>
                    <div className="bgsend">
                        <img anima-src="./img/create-invoice-rectangle.png" className="rectangle" src={rectangle}/>
                    </div>
                    <div className="email">
                        Email
                    </div>
                    <div className="sync">
                        Sync
                    </div>
                    <div className="iconchecked">
                        <img anima-src="./img/create-invoice-shape-3@2x.png" className="shape" src={iconChecked}/>
                    </div>
                    <div className="iconcheckedcopy">
                        <img anima-src="./img/create-invoice-shape-4@2x.png" className="shape" src={iconCheckedCopy}/>
                    </div>
                    <div className="sendvia">
                        Send Via:
                    </div>
                    <div className="createsendbutton">
                        <div className="rectangle7">
                        </div>
                        <div className="send">
                            SEND
                        </div>
                        <div className="expandmorematerial">
                            
                        </div>
                        <img anima-src="./img/create-invoice-line-4@2x.png" className="line4" src={line}/>
                    </div>
                    <div className="headersend">
                        <div className="group5">
                            <div className="rectanglecopy">
                            </div>
                            <div className="rectanglecopy2">
                            </div>
                        </div>
                    </div>
                    <div className="iconclose">
                        <img anima-src="./img/create-invoice-path-8@2x.png" className="path" src={invoicePath}/>
                    </div>
                    <div className="textheadercreatelayout">
                        <div className="background1">
                        </div>
                        <div className="sendnews">
                            Send Invoice
                        </div>
                    </div>
                </div>
                <div className="sendinvoicerecipienttitle">
                    <div className="background">
                    </div>
                    <div className="createlabelcopy">
                        <div className="label">
                            Items
                        </div>
                    </div>
                    <div className="createplaceholder">
                        <div className="placeholder">
                            Title…
                        </div>
                    </div>
                    <div className="createdata">
                        <div className="background1">
                        </div>
                        <div className="data">
                            Monday, 11th April 2019
                        </div>
                    </div>
                    <div className="createdatacopy">
                        <div className="background1">
                        </div>
                        <div className="data">
                            Monday, 17th April 2019
                        </div>
                    </div>
                    <img anima-src="./img/create-invoice-line-2-1@2x.png" className="line2" src={invoiceLine}/>
                    <div className="createlabel">
                        <div className="label">
                            Invoice Date
                        </div>
                    </div>
                    <div className="createlabelred">
                    </div>
                    <img anima-src="./img/create-invoice-line-copy-11.png" className="linecopy8" src={line2}/>
                    <img anima-src="./img/create-invoice-line-copy-11.png" className="linecopy10" src={line3}/>
                    <img anima-src="./img/create-invoice-line-copy-11.png" className="linecopy11" src={line4}/>
                    <div className="createplaceholder1">
                        <div className="placeholder">
                            Select Recipient
                        </div>
                    </div>
                    <div className="iconrecipient">
                        <div className="background1">
                        </div>
                        <img anima-src="./img/create-invoice-fill-8@2x.png" className="fill8" src={receipents}/>
                    </div>
                    <div className="selectrecipientadd">
                        <div className="background1">
                        </div>
                        <div className="label1">
                            +
                        </div>
                    </div>
                    <div className="icondropdowncopy">
                        <div className="background1">
                        </div>
                        <img anima-src="./img/create-invoice-xmlid622@2x.png" className="xmlid622" src={dropdownIcon}/>
                    </div>
                    <div className="icondropdowncopy2">
                        <div className="background1">
                        </div>
                        <img anima-src="./img/create-invoice-xmlid622@2x.png" className="xmlid622" src={dropdownIcon}/>
                    </div>
                    <div className="rectangle">
                    </div>
                    <div className="createplaceholder2">
                        <div className="placeholder">
                            + Add Item
                        </div>
                    </div>
                </div>
            </div>
            <div className="billsidebaractiveitem">
                <div className="rectangle">
                </div>
                <div className="a10">
                </div>
                <div className="overview">
                    Overview
                </div>
                <div className="iconstats">
                    <img anima-src="./img/create-invoice-graph-1@38.46154022216797x.png" className="graph" src={invoiceGrapgh}/>
                </div>
            </div>
        </>
    )
}

export default PopUp;