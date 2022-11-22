import { useEffect, useState } from "react";

const imagenes = ["./imagenes/img1.jpg", "./imagenes/img2.jpg"];

const title = ["M", "A", "T", "I", "S", "S", "E", "MATISSE"];

function Header() {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNum(Math.floor(Math.random() * imagenes.length));
    }, 2000);

    const counter = setTimeout(() => {
      if (count >= title.length) {
        setCount(0);
      } else {
        document.getElementById("title").innerHTML = title[count];
        setCount(count + 1);
      }
      return () => {
        clearInterval(timer);
        clearTimeout(counter);
      };
    }, 1000);
  }, [num, count]);

  return (
    <header className="header">
      <div className="titleHeader">
        <h1 className="letterRotate" id="title">
          MATISSE
        </h1>
      </div>
      <div className="carrusel">
        <img src={imagenes[num]} alt="Carrusel" />
      </div>
    </header>
  );
}

export default Header;
