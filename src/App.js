import React, { useState, useEffect } from "react";
import Chartline from "./components/Chartline";
import style from "./App.module.css";
import { AlertCard } from "./components/AlertCard/AlertCard";
import ChartBar from "./components/ChartBar";
import { getAlerts } from "./function/alert";

const App = () => {
  const [alldata, setalldata] = useState([]);
  const [totalalerts, settotalalerts] = useState();
  const [ok, setok] = useState(false);

  const fetchAlerts = () => {
    getAlerts().then((res) => {
      setalldata(res.data.alertsData);
      settotalalerts(res.data.alertsCount);
      setok(false);
    });
  };
  useEffect(() => {
    fetchAlerts();
  }, []);
  useEffect(() => {
    {
      ok && fetchAlerts();
    }
  }, [ok]);
  return (
    <div className={style.container}>
      <div>
        <AlertCard setok={setok} />
      </div>
      <div className={style.chartscontainer}>
        <div className={style.chart}>
          <Chartline alldata={alldata} />
        </div>
        <div className={style.chart}>
          <ChartBar alldata={alldata} />
        </div>
      </div>
    </div>
  );
};

export default App;
