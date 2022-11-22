function Menu() {
  function changeBackground(ev) {
    ev.target.classList.add("changeColor");
  }

  function removeChangeBackground(ev) {
    ev.target.classList.remove("changeColor");
  }

  return (
    <div className="menu">
      <nav>
        <ul>
          <li>
            <a
              onMouseOver={changeBackground}
              onMouseLeave={removeChangeBackground}
              href="#inicio"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              onMouseOver={changeBackground}
              onMouseLeave={removeChangeBackground}
              href="#news"
            >
              Noticias
            </a>
          </li>
          <li>
            <a
              onMouseOver={changeBackground}
              onMouseLeave={removeChangeBackground}
              href="#bio"
            >
              Biografia
            </a>
          </li>
          <li>
            <a
              onMouseOver={changeBackground}
              onMouseLeave={removeChangeBackground}
              href="#music"
            >
              Musica
            </a>
          </li>
          <li>
            <a
              onMouseOver={changeBackground}
              onMouseLeave={removeChangeBackground}
              href="#eventos"
            >
              Eventos
            </a>
          </li>
          <li>
            <a
              onMouseOver={changeBackground}
              onMouseLeave={removeChangeBackground}
              href="#contact"
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
