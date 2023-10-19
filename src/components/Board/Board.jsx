export default function Board({ numColumns }) {
  const image = "https://www.edding.com/fileadmin/templates/templates-alphabet/template-letter-x.svg"; 

  const images = Array.from({ length: numColumns }, (item, index) => (
    <img key={index} src={image} alt="X" />
  ));

  return (
    <div>
      {images}
    </div>
  );
}