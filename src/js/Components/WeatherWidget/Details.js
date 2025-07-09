
import React from "react";

import styles from "./Details.scss";
import sunrise from "../../../assets/img/sunrise.svg";
import sunset from "../../../assets/img/sunset.svg";
import details from "../../../assets/img/details.svg";

const Details = (props) => {
    return (
        <div className="widget__details">
            <h2>Details</h2>
            <div className="widget__details__sun">
                <div className="widget__details__sun--sunrise">
                    <img src={sunrise} alt="sunrise"/>
                    <span>TIME</span>
                </div>
                <div className="widget__details__sun--details">
                    <img src={details} alt="details"/>
                </div>
                <div className="widget__details__sun--sunset">
                    <img src={sunset} alt="sunset"/>
                    <span>TIME</span>
                </div>
            </div>
        </div>
    )
}

export default Details;