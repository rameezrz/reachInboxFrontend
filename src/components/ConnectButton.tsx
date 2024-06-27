import axios from "axios";
import React from "react";

interface ConnectButtonProps {
  provider: string;
  url: string;
  className?: string;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ provider, url }) => {
  const handleConnect = async () => {
    try {
      const response = await axios.get(url);
      console.log(response.data);
      window.location.href = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleConnect}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
    >
      Connect {provider} Account
    </button>
  );
};

export default ConnectButton;
