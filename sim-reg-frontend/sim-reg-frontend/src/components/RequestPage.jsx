import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:9401/requests');
        setRequests(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">User Requests</h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : requests.length === 0 ? (
          <p className="text-center">No requests found.</p>
        ) : (
          <div className="space-y-4">
            {requests.map((request) => (
              <div key={request.id} className="p-4 bg-gray-50 rounded shadow">
                <h3 className="text-lg font-bold">Request ID: {request.id}</h3>
                <p><strong>Username:</strong> {request.username}</p>
                <p><strong>Request:</strong> {request.request}</p>
                <p><strong>Date:</strong> {new Date(request.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestPage;
