function CardNewsletter({ imagen, titulo, contenido }) {
  function fxIn(e) {
    e.target.style.transition = ".4s all ease";
    e.target.style.opacity = 0.4;
  }

  function fxOut(e) {
    e.target.style.transition = ".4s all ease";
    e.target.style.opacity = 1;
  }

  return (
    <div className="cardnewsletter">
      <figure>
        <img onMouseOver={fxIn} onMouseOut={fxOut} src={imagen} alt="Foto" />
      </figure>
      <div className="cardContent">
        <h2>{titulo}</h2>
        <p>{contenido}</p>
      </div>
    </div>
  );
}

export default CardNewsletter;
