import React from "react";
import "../slider/Slider.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import proyectFood from "../../media/proyectFood.png";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className='tit'>
        <h2>Mis Proyectos</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5">
            <Carousel>
              <Carousel.Item>
                <img className="img-1" src={proyectFood} alt="First slide" />
                <Carousel.Caption>
                  <div className="img-desc">
                    <h3>App FOOD'S</h3>
                    <p>
                      Aplicación de filtrado, ordenado y busqueda de recetas
                      desde una API externa
                    </p>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="img-1"
                  src="https://picsum.photos/500/300?img=2"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="img-1"
                  src="https://picsum.photos/500/300?img=3"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    <div className="links">
       <ul>
        <li>
        <h5>
        Link a demo de Proyecto Food's:{" "}
        <a href="https://www.linkedin.com/posts/jonathan-moran-5b2048213_javascript-html-react-activity-6988216663926050817-zML9/">
          <p>AQUÍ</p>
          
        </a>
        <p>GitHub: <a href="https://github.com/jonathan9348/App-Food">Repositorio</a></p>
      </h5>
        </li>
        <li>
        <h5>
        Link a demo de Proyecto Videogames:{" "}
        <a href="https://www.linkedin.com/posts/jonathan-moran-5b2048213_javascript-html-react-activity-6988216663926050817-zML9?utm_source=share&utm_medium=member_desktop">
          <p>AQUÍ</p>
        </a>
        <p>GitHub: <a href="https://github.com/jonathan9348/PI-Videogames">Repositorio</a></p>
      </h5>
        </li>
       
     </ul>
     </div>
    </div>
  );
};

export default Slider;
