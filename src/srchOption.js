import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.duckduckgo.com/?q=${searchTerm}&format=json`);
      const data = await response.json();
      setSearchResults(data.AbstractText);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <div style={{ textAlign: 'center', marginTop: '50px',paddingTop: '200px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>{searchResults}</div>
    </div>
  );
}

export default App;
