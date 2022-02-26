import React, { useState, useEffect } from "react";
import style from "./AlertCard.module.css";
import { AiTwotoneAlert } from "react-icons/ai";
import { pushAlert, getAlerts } from "../../function/alert";

export const AlertCard = ({ setok }) => {
  const [datenow, setdatenow] = useState(new Date().toLocaleDateString());
  const [alerts, setalerts] = useState();
  const fetchAlerts = () => {
    getAlerts().then((res) => {
      setalerts(res.data.alertsCount);
    });
  };
  useEffect(() => {
    fetchAlerts();
  }, []);
  const handleClick = () => {
    pushAlert(alerts, datenow).then((res) => {
      setok(true);
      fetchAlerts();
    });
  };
  return (
    <div className={style.container}>
      <h1>Real Time Dashboard </h1>
      <div className={style.info}>
        <h2 style={{ textAlign: "center" }}>{alerts} Total alerts </h2>
        <AiTwotoneAlert style={{ cursor: "pointer" }} size={"2em"} />{" "}
      </div>
      <button onClick={() => handleClick()}>Send Alert </button>
    </div>
  );
};
