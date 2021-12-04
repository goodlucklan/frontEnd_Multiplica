import React, { useState, useEffect } from "react";
import axios from "axios";
const fetchDataCall = async (value) => {
  let apiReturn = await axios
    .get(`https://multiplicatest.herokuapp.com/colores/${value}`)
    .then(async function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiReturn;
};
export const DataInformation = ({ Information }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetchDataCall(Information);
      setData(response.data.respuesta);
      console.log("response", response.data.respuesta);
    };

    fetchData();
  }, [Information]);
  return (
    <div
      style={{
        color: "#FFFFFF",
        width: "200px",
        margin: "5px",
        backgroundColor: "#000000",
        alignItems: "center",
        textAlign: "center",
        borderStyle: "solid",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>{data.name}</p>
      <p>{data.year}</p>
      <p>{data.color}</p>
      <p>{data.pantone_value}</p>
    </div>
  );
};
