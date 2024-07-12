import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TokenComponent.css';

const TokenComponent = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1,
            sparkline: true,
          },
        });
        setTokens(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching token data: ", error);
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="token-container">
      {tokens.map((token) => (
        <div key={token.id} className="token-card">
          <img src={token.image} alt={token.name} className="token-image" />
          <h2>{token.name} ({token.symbol.toUpperCase()})</h2>
          <p className="price">Price: ${token.current_price.toLocaleString()}</p>
          <p>Market Cap: ${token.market_cap.toLocaleString()}</p>
          <p className={token.price_change_percentage_24h >= 0 ? 'change-positive' : 'change-negative'}>
            24h Change: {token.price_change_percentage_24h.toFixed(2)}%
          </p>
          <div className="sparkline">
            {token.sparkline_in_7d.price.map((price, index) => (
              <span key={index} style={{ height: `${Math.min(price / 100, 50)}px` }}></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenComponent;
