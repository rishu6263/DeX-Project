import React from "react";
import Logo from "../moralis-logo.svg";
import Eth from "../eth.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header(props) {
 // const { address, isConnected, connect, disconnect } = props;

  // const handleConnectDisconnect = () => {
  //   if (isConnected) {
  //     disconnect();
  //   } else {
  //     connect();
  //   }
  // };
  const [walletAddress, setWalletAddress] = useState(null);
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('MetaMask is not installed. Please install MetaMask to connect your wallet.');
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <header>
      <div className="leftH">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <Link to="/home" className="link">
          <div className="headerItem">Swap</div>
        </Link>
        <Link to="/tokens" className="link">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src={Eth} alt="eth" className="eth" />
          Ethereum
        </div>
        <div className="connectButton" >
        {walletAddress ? (
          <div>
            <p>{walletAddress}</p>
            <button onClick={disconnectWallet} className="cta-button">Disconnect Wallet</button>
          </div>
        ) : (
          <button onClick={connectWallet} className="cta-button">Connect Wallet</button>
        )}
          {/* {isConnected ? `${address.slice(0, 4)}...${address.slice(-4)}` : "Connect"} */}
        </div>
      </div>
    </header>
  );
}

export default Header;
