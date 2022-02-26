import axios from "axios";

export const createAlert = async (alertsData, alertsCount) =>
  await axios.post(`${process.env.REACT_APP_API}/alerts/createalert`, {
    alertsData,
    alertsCount,
  });

export const getAlerts = async () =>
  await axios.get(`${process.env.REACT_APP_API}/alerts/getAlerts`, {});

export const pushAlert = async (totalalerts, datenow) =>
  await axios.post(`${process.env.REACT_APP_API}/alerts/pushAlert`, {
    totalalerts,
    datenow,
  });
