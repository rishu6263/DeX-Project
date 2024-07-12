import React, { useState, useEffect } from 'react';
import './Home.css';
import { ethers } from 'ethers';

const Home = () => {
  
  // Check if wallet is connected on page load
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setWalletAddress(accounts[0]);
          }
        } catch (error) {
          console.error('Error checking wallet connection:', error);
        }
      }
    };

    checkWalletConnection();
  }, []);
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
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to DeFi Exchange</h1>
        <p>Your gateway to decentralized finance</p>
      </header>
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-cards">
          <div className="feature-card">
            <h3>Secure Swaps</h3>
            <p>Swap tokens securely across multiple blockchain networks.</p>
          </div>
          <div className="feature-card">
            <h3>Liquidity Pools</h3>
            <p>Provide liquidity to earn rewards and fees on every swap.</p>
          </div>
          <div className="feature-card">
            <h3>Real-Time Analytics</h3>
            <p>Get real-time data on token prices and market trends.</p>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <h2>Platform Statistics</h2>
        <div className="stats-cards">
          <div className="stat-card">
            <h3>All-Time Volume</h3>
            <p>$2.0T</p>
          </div>
          <div className="stat-card">
            <h3>All-Time Swappers</h3>
            <p>16.6M</p>
          </div>
          <div className="stat-card">
            <h3>All-Time LP Fees</h3>
            <p>$3.4B</p>
          </div>
          <div className="stat-card">
            <h3>24H Volume</h3>
            <p>$924.3M</p>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <h2>Join the Future of Finance</h2>
        <p>Start swapping, providing liquidity, and earning rewards today.</p>
        <button className="cta-button">Get Started</button>
      </section>
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-links">
            <h3>Connect with us</h3>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="footer-info">
            <h3>Contact</h3>
            <p>Email: support@defiexchange.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
