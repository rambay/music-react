function Bio() {
  function zoom(ev) {
    ev.target.classList.add("zoom");
  }

  function zoomOut(ev) {
    ev.target.classList.remove("zoom");
  }

  return (
    <div className="bio">
      <h2>Biografia</h2>
      <p>
        “La primera vez que escuché una canción de Pablo Preciado sabía que
        había en ella algo especial, no sólo por la manera tan particular de
        escribir, sino también por su forma de cantar, hace muchos años que no
        oía a alguien así. Pablo fue a verme a Miami y me presentó el resto del
        material que tenía, era simplemente extraordinario. Hicimos un plan para
        dar a conocer su nombre, varios artistas grandes le grabaron canciones
        (Cristian Castro, Alejandra Guzmán, Ha*Ash, Carlos Rivera) y el
        comentario siempre era el mismo: La canción es increíble, pero ¿quién
        canta?”, señaló Paul Forat, Vicepresidente Artístico de Sony Music
        México, quien tuvo la sensibilidad para adentrarse en las creaciones no
        sólo de uno de los miembros de Matisse, sino poco a poco en todos sus
        integrantes, pues más tarde Pablo le presentó a Román Torres, coautor de
        varios de los temas y con quien también cantaba desde hace tiempo. Tan
        sólo ellos dos ya eran un diamante puro, pero el brillo resultaría aún
        mayor con la inclusión de Melissa, una joven que subió un video a
        internet cantando un tema de Carlos Rivera y, sencillamente, cautivó a
        miles en sólo unos días.
      </p>
      <div className="galleryList">
        <figure>
          <img
            src="./imagenes/discografia1.jpg"
            onMouseOver={zoom}
            onMouseOut={zoomOut}
            alt="Discografia 1"
          />
        </figure>
        <figure>
          <img
            src="./imagenes/discografia2.jpg"
            onMouseOver={zoom}
            onMouseOut={zoomOut}
            alt="Discografia 2"
          />
        </figure>
        <figure>
          <img
            src="./imagenes/discografia3.jpg"
            onMouseOver={zoom}
            onMouseOut={zoomOut}
            alt="Discografia 3"
          />
        </figure>
        <figure>
          <img
            src="./imagenes/discografia4.jpg"
            onMouseOver={zoom}
            onMouseOut={zoomOut}
            alt="Discografia 4"
          />
        </figure>
      </div>
    </div>
  );
}

export default Bio;
