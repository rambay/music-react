import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import CardNewsletter from "./componentes/CardNewsletter";
import Bio from "./componentes/Bio";
import Footer from "./componentes/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header titulo="Matisse" />
      <Menu />
      <main className="main">
        <div className="wrapper">
          <div className="contentMain">
            <div className="newsletterList">
              <h2>Ultimas noticias</h2>
              <CardNewsletter
                imagen="https://cdn.smehost.net/matissemxcom-mxprod/wp-content/uploads/2021/04/SK_PiesACabeza-200x200.png"
                titulo="Matisse ya tiene nuevo tema “De Pies a Cabeza"
                contenido="Con un sonido de pop internacional que contrasta con los ritmos latinos que dominaron su última producción discográfica, el grupo de Pablo Preciado, Román Torres y Melissa Robles, Matisse, presenta su nuevo sencillo oficial: “De Pies a Cabeza”, una canción que pone el ritmo del verano."
              />
              <CardNewsletter
                imagen="https://cdn.smehost.net/matissemxcom-mxprod/wp-content/uploads/2021/01/matisse1-200x200.jpg"
                titulo="Matisse & DVICIO juntos en un nuevo sencillo y video “Valeria”"
                contenido="DVICIO y Matisse son dos de esos grupos llamados a entenderse. Ya lo habían hecho en alguna ocasión, pero ahora con “Valeria” elevan su colaboración a una categoría superior."
              />
              <CardNewsletter
                imagen="https://cdn.smehost.net/matissemxcom-mxprod/wp-content/uploads/2020/12/TRES-200x200.jpg"
                titulo="Matisse lanza “Tres” Un álbum con los sonidos más innovadores de la actualidad."
                contenido="Pablo Preciado, Román Torres y Melissa Robles se confirma como la fuerza artística más innovadora y profunda del pop en español con Tres, el nuevo disco de Matisse, una inolvidable producción donde los más innovadores sonidos del pop se dan cita con su sello característico."
              />
            </div>
            <Bio />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
