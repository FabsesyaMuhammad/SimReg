import axios from "axios";
import React, { useState } from "react";

const DocumentPage = () => {
  const [formData, setFormData] = useState({
    nik: "",
    polres_id: "",
    document_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9401/document/requests",
        formData
      );
      if (response.status === 201) {
        alert("Document submitted successfully");
      } else {
        alert("Failed to submit document");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting document");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Submit Document</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="nik">
              NIK
            </label>
            <input
              type="text"
              id="nik"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="polres_id">
              Polres ID
            </label>
            <input
              type="text"
              id="polres_id"
              name="polres_id"
              value={formData.polres_id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="document_id">
              Document ID
            </label>
            <input
              type="text"
              id="document_id"
              name="document_id"
              value={formData.document_id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentPage;
