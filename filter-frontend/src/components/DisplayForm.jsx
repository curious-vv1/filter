import React from "react";

const DisplayForm = ({ data }) => {
  return (
    <div>
      {data.map((dat, index) => (
        <div className="border border-gray-300 rounded p-4" key={index}>
          <div className="mb-4">{dat.name}</div>
          <div>{dat.company}</div>
        </div>
      ))}
    </div>
  );
};

export default DisplayForm;
