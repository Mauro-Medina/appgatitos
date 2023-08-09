import React, { useState, useEffect } from 'react';

function App() {
  const [catImage, setCatImage] = useState('');

  const fetchCatImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(response => response.json())
      .then(response => setCatImage(response[0].url))
      .catch(error => console.error('Error al obtener imagen', error));
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className="container">
      <h1>Gatitos</h1>
      <img src={catImage} alt="Cat" />
      <button onClick={fetchCatImage}>Siguiente gato</button>
    </div>
  );
}

export default App;