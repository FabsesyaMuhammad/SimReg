import axios from 'axios';
import React, { useState } from 'react';

const UploadPage = () => {
  const [formData, setFormData] = useState({
    account_id: '',
    KTP: null,
    KK: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('account_id', formData.account_id);
    data.append('KTP', formData.KTP);
    data.append('KK', formData.KK);

    try {
      const response = await axios.post('http://localhost:9401/documents/upload', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        alert('Documents uploaded successfully');
      } else {
        alert('Failed to upload documents');
      }
    } catch (error) {
      console.error(error);
      alert('Error uploading documents');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Upload Documents</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="account_id">Account ID</label>
            <input
              type="text"
              id="account_id"
              name="account_id"
              value={formData.account_id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="KTP">KTP</label>
            <input
              type="file"
              id="KTP"
              name="KTP"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="KK">KK</label>
            <input
              type="file"
              id="KK"
              name="KK"
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
