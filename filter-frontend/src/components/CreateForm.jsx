import React, { useState } from "react";
import axios from "axios";

const CreateForm = ({ fetchData }) => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  const addData = async () => {
    const newData = { name, company };
    try {
      await axios.post(`${window.location.origin}/filter/add`, newData);
      setName("");
      setCompany("");
      fetchData(); // Fetch updated list of days after adding a new day
    } catch (error) {
      console.error("Error while adding data", error);
    }
  };

  return (
    <form className="mb-8">
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          id="title"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Company</label>
        <input
          className="w-full border border-gray-300 rounded px-3 py-2"
          id="content"
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={addData}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
