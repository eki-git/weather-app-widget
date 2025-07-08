import React from 'react';
import styles from "./HourlyForecast.scss";
const HourlyForecast = (props) => {
    const {forecast} = props;
    console.log(forecast);
    return (
        <div className="widget__hourly-forecast">
            {
                forecast.map((hour, i) => {
                    return (
                        <div className="widget__hourly-forecast--item" key={i}>
                            <span>{hour.hour}</span>
                            <span>{hour.state}</span>
                            <span>{hour.temperature} C</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HourlyForecast;