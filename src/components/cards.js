import React from "react";

export const Cards = ({ bg, name, setInformation, data }) => {
  return (
    <div
      style={{
        color: "#000000",
        width: "100px",
        margin: "5px",
        backgroundColor: bg,
        alignItems: "center",
        textAlign: "center",
        borderStyle: "solid",
        borderRadius: "5px",
      }}
      onClick={() => setInformation(data)}
    >
      {name}
    </div>
  );
};
