import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [formData, setFormData] = useState({
    account_id: "",
    nik: "",
    polres_id: 0,
    ktp: null,
    kk: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // const [polres, setPolres] = useState([]);
  // const [polresId, setPolresId] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9401/document/getPolres")
  //     .then((res) => {
  //       setPolres(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("account_id", formData.account_id);
    data.append("ktp", formData.ktp);
    data.append("kk", formData.kk);
    data.append("nik", formData.nik);
    data.append("polres_id", formData.polres_id);

    try {
      const response = await axios.post(
        "http://localhost:9401/document/request",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        alert("Documents uploaded successfully");
        navigate("/auth");
      } else {
        alert("Failed to upload documents");
      }
    } catch (error) {
      console.error(error);
      alert("Error uploading documents");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-white">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-red-600">
          Upload Documents
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="nik">
              NIK
            </label>
            <input
              type="text"
              id="nik"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="account_id">
              Account ID
            </label>
            <input
              type="text"
              id="account_id"
              name="account_id"
              value={formData.account_id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="polres_id">
              Polres ID
            </label>
            {/* <select
              onChange={(e) => {
                setPolresId(e.target.value);
              }}
            >
              {polres.map((item, id) => (
                <option value={item.polres_id}>{item.name}</option>
              ))}
            </select> */}
            <input
              type="text"
              id="polres_id"
              name="polres_id"
              value={formData.polres_id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="ktp">
              KTP
            </label>
            <input
              type="file"
              id="ktp"
              name="ktp"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="kk">
              KK
            </label>
            <input
              type="file"
              id="kk"
              name="kk"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-red-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
