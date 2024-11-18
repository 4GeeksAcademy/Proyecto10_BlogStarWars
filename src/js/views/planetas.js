import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cards.css";
import { PiStarThin } from "react-icons/pi";



export const Planetas = () => {
    const { store, actions } = useContext(Context);
    const [seleccionarPlaneta, setSeleccionarPlaneta] = useState(null);
    const [planetaId, setPlanetaId] = useState(null);
    

    useEffect(() => {
        actions.getPlanetas();
    }, []);

    const fetchDetallesPlanetas = (planetUid) => {
        fetch(`https://www.swapi.tech/api/planets/${planetUid}`)
            .then((resp) => resp.json())
            .then((data) => {
                setSeleccionarPlaneta(data.result.properties);
                setPlanetaId(planetUid);
            })
            .catch((error) => console.error('Error al realizar el Fetch de esta operación', error));
    };

    const añadirAFavoritos = (planetName) => {
        if (!store.favorites.includes(planetName)) {
            actions.añadirFavorito(planetName);
            setAlertaDuplicados(null);
        } else {
            setAlertaDuplicados(
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{planetName}</strong> Ya está en tus favoritos.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlertaDuplicados(null)}></button>
                </div>
            );
        }
    };

    const handleImageError = (event) => {
        event.target.style.display = "none";
        event.target.closest(".card-custom").style.display = "none";
    };

    return (
        <div className="container my-6">
            {seleccionarPlaneta ? (
                <>
                    <div className="card mb-3 card-custom bg-dark">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${planetaId}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={seleccionarPlaneta.name}
                                    onError={handleImageError}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-warning">{seleccionarPlaneta.name}</h5>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Diámetro: {seleccionarPlaneta.diameter}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Clima: {seleccionarPlaneta.climate}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Gravedad: {seleccionarPlaneta.gravity}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Terreno: {seleccionarPlaneta.terrain}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Agua superficial: {seleccionarPlaneta.surface_water}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Población: {seleccionarPlaneta.population}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning mb-3" onClick={() => setSeleccionarPlaneta(null)}>
                        Volver a Planetas
                    </button>
                </>
            )
                :
                (
                    <div className="card-container">
                        {store.planetas?.map((planet, index) => (
                            <div className="card m-2 card-custom bg-dark" key={index}>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={planet.name}
                                    onError={handleImageError} // Manejo de error de carga de imagen
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-white">{planet.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => fetchDetallesPlanetas(planet.uid)}
                                        >
                                            Detalles
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            onClick={() => añadirAFavoritos(planet.name)}
                                        >
                                            <PiStarThin />

                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
};