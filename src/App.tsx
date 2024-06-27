import React from "react";
import "./App.css";
import ConnectButton from "./components/ConnectButton";

const App: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/007/424/393/non_2x/message-icon-made-with-binary-code-email-mail-communication-online-chat-global-networking-digital-binary-data-and-streaming-digital-code-matrix-background-with-digits-1-0-illustration-vector.jpg")`,
      }}
    >
      <div className="bg-white w-1/3 flex flex-col items-center bg-opacity-95 p-10 rounded-xl shadow-lg">
        <h1 className="text-5xl font-bold mb-2 text-gray-800">ReachInbox</h1>
        <h1 className="text-2xl font-bold mb-10 text-gray-600">
          Email Processing Tool
        </h1>
        <div className="flex flex-col gap-6">
          <ConnectButton
            provider="Google"
            url={`${import.meta.env.VITE_BASE_URL}/google-auth`}
            className="btn btn-google"
          />
          <ConnectButton
            provider="Outlook"
            url={`${import.meta.env.VITE_BASE_URL}/ms-auth`}
            className="btn btn-outlook"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
