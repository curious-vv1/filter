import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateForm from "./CreateForm";
import DisplayForm from "./DisplayForm";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch days on initial render

  const fetchData = async () => {
    try {
      const response = await axios.get(`${window.location.origin}/filter/get`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching days", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl underline font-extrabold text-center mb-8">
        Filter
      </h1>
      <CreateForm fetchData={fetchData} />
      <DisplayForm data={data} />
    </div>
  );
};

export default Home;
