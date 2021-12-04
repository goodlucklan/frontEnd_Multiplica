import React, { useState, useEffect } from "react";
import { Cards } from "./components/cards";
import axios from "axios";
import { DataInformation } from "./components/information";
// import './App.css';

const fetchDataCall = async () => {
  let apiReturn = await axios
    .get("https://multiplicatest.herokuapp.com/colores")
    .then(async function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiReturn;
};
function App() {
  const [data, setData] = useState([]);
  const [Information, setInformation] = useState(1);
  console.log("information", Information)
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetchDataCall();
      setData(response.data.respuesta);
      console.log("response", response.data);
    };

    fetchData();
  }, []);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.length > 0
        ? data.map((x) => (
            <Cards
              key={x.id}
              bg={x.color}
              name={x.name}
              data={x.id}
              setInformation={setInformation}
            />
          ))
        : null}
      <DataInformation Information={Information}/>
    </div>
  );
}

export default App;
