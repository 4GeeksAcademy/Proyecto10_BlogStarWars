import React from "react";

export const Carousel = () => {

    return (
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://wallpapers.com/images/hd/4k-star-wars-the-force-awakens-acm74zjpq3j2pywa.jpg" className="d-block w-100" alt="Universo STAR WARS" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1>Mi blog de STAR WARS</h1>
                        <p>Un pedazito de una favulosa saga hecho blog </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://wallpapers.com/images/hd/paisajemisterioso-de-dathomir-mct0iyi71d9mo8pi.jpg" className="d-block w-100 " alt="Planeta" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Mi planeta favorito Dathomir</h5>
                        <p>Un planeta remoto y neutral en el sector Quelli, hogar de las Hermanas de la Noche.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images6.alphacoders.com/100/1007429.jpg" className="d-block w-100 " alt="Fallen Order" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Mi juego favorito</h5>
                        <p>En este pequño blog no podía faltar uno de mis juegos favoritos de la saga.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>



    )
}