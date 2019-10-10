import React from "react";
import firstCircle from "../img/create-invoice-screen-shot-2018-05-28-at-104351-copy@2x.png";
import paidWithTime from "../img/create-invoice-stats--label-copy-3.png";
import secondCircle from "../img/create-invoice-screenshot-2019-04-06-at-61626-pm-copy@2x.png"
import paidLate from "../img/create-invoice-stats--label-copy-4.png";
import thirdCircle from "../img/create-invoice-screenshot-2019-04-06-at-61626-pm-copy@2x.png";
import unpaid from "../img/create-invoice-stats--label-copy-5.png";
import centerLine from "../img/create-invoice-line-2.png";

function Billing(){
    return(
        <div className="statsoverviewbilling">
            <div className="background">
            </div>
            <div className="group2">
                <img anima-src="./img/create-invoice-screenshot-2019-04-06-at-61626-pm-copy@2x.png" className="screenshot20190406at61626pm" src={thirdCircle}/>
                <div className="rectangle1">
                </div>
            </div>
            <div className="a20">
                20%
            </div>
            <img anima-src="./img/create-invoice-stats--label-copy-5.png" className="statslabelcopy5" src={unpaid}/>
            <div className="group1">
                <img anima-src="./img/create-invoice-screenshot-2019-04-06-at-61626-pm-copy@2x.png" className="screenshot20190406at61626pmcopy" src={secondCircle}/>
                <div className="rectangle1">
                </div>
            </div>
            <div className="groupcopy">
                <img anima-src="./img/create-invoice-screen-shot-2018-05-28-at-104351-copy@2x.png" className="screenshot20180528at104351copy" src={firstCircle}/>
                <div className="rectangle1">
                </div>
            </div>
            <div className="a40">
                40%
            </div>
            <img anima-src="./img/create-invoice-stats--label-copy-3.png" className="statslabelcopy3" src={paidWithTime}/>
            <div className="a401">
                40%
            </div>
            <div className="rectangle">
            </div>
            <div className="rectanglecopy4">
            </div>
            <img anima-src="./img/create-invoice-line-2.png" className="line2" src={centerLine}/>
            <div className="rm">
                RM
            </div>
            <div className="a50k">
                50K
            </div>
            <div className="a455">
                455
            </div>
            <div className="statslabelcopy">
                <div className="paid">
                    SENT
                </div>
            </div>
            <div className="a212">
                212
            </div>
            <div className="statslabel">
                <div className="paid">
                    PAID
                </div>
            </div>
            <div className="statslabelcopy2">
                <div className="paid">
                    UNPAID
                </div>
            </div>
            <div className="a189">
                189
            </div>
            <div className="rmcopy2">
                RM
            </div>
            <div className="a20k">
                20K
            </div>
            <img anima-src="./img/create-invoice-stats--label-copy-4.png" className="statslabelcopy4" src={paidLate}/>
            <div className="rmcopy">
                RM
            </div>
            <div className="a30k">
                30K
            </div>
            <div className="statstitle">
                <div className="background1">
                </div>
                <div className="invoices">
                    INVOICES
                </div>
            </div>
            <div className="statstitlecopy">
                <div className="background1">
                </div>
                <div className="invoices">
                    CONVERSION
                </div>
            </div>
        </div>
    )
}
export default Billing;