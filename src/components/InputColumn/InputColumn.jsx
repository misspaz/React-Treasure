import { useState } from "react";

export default function InputColumn({ send }) {
  const [number, setNumber] = useState(
    JSON.parse(localStorage.getItem("column"))?.number || 0
  );
  const [images, setImages] = useState([]);

  const handleInput = (ev) => {
    const value = parseInt(ev.target.value);
    setNumber(value);
    localStorage.setItem("column", JSON.stringify({ number: value }));
  };

const generateImages = () => {
    const imageSrc =
      "https://www.edding.com/fileadmin/templates/templates-alphabet/template-letter-x.svg";

    const imageElements = Array.from({ length: number }, (item, index) => (
      <img key={index} src={imageSrc} alt="X" />
    ));

    setImages(imageElements);
  };
   
    return (
        <div>
        <h2>Introduce el número de columnas</h2>
        <input type="text" onChange={handleInput} />
        <button onClick={generateImages}>Generar imágenes</button>
        <div>{images}</div>
      </div>
    );
  };

