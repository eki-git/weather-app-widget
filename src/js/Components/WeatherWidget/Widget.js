import React from "react";
import styles from "./Widget.scss";
import Header from "./Header";
import HourlyForecast from "./HourlyForecast";
import Details from "./Details";
const Widget = (props) => {
    const {city, current_temperature, state} = props.data;
    const {hourly} = props.data;
    return (
        <section className="widget__section">
          <Header city={city} temp={current_temperature} state={state}></Header>
          <HourlyForecast forecast={hourly}/>
          <Details/>
        </section>
    )
}

export default Widget;