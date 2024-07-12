import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import { Routes, Route } from "react-router-dom";
import { useConnect, useAccount, useDisconnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

function App() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className="App">
      <Header
        connect={connect}
        disconnect={disconnect}
        isConnected={isConnected}
        address={address}
      />
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Swap isConnected={isConnected} address={address} />} />
          <Route path="/tokens" element={<Tokens />} />
        </Routes>
      </div>
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
