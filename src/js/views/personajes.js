import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cards.css";

export const Personajes = () => {
    const { store, actions } = useContext(Context);
    const [elegirPersonaje, setElegirPersonaje] = useState(null);
    const [personajeId, setPersonajeId] = useState(null);
    const [alertaDuplicados, setAlertaDuplicados] = useState(null);

    useEffect(() => {
        actions.getPersonajes();
    }, []);

    const fetchInfoPersonajes = (url, id) => {
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setElegirPersonaje(data.result.properties);
                setPersonajeId(id);
            })
            .catch((error) => console.error('Error al realizar el Fetch de esta operación', error));
    };

    const añadirAFavoritos = (characterName) => {
        if (!store.favoritos.includes(characterName)) {
            actions.añadirFavorito(characterName);
            setAlertaDuplicados(null);
        } else {
            setAlertaDuplicados(
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{characterName}</strong>  Ya está en tus favoritos.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlertaDuplicados(null)}></button>
                </div>
            );
        }
    };

    return (
        <div className="container my-6">
            {alertaDuplicados}
            {elegirPersonaje ? (
                <>
                    <div className="card mb-3 card-custom bg-dark">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/characters/${personajeId}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={elegirPersonaje.name}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-warning">{elegirPersonaje.name}</h5>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Altura: {elegirPersonaje.height}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Kg: {elegirPersonaje.mass}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Color de pelo: {elegirPersonaje.hair_color}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Color de piel: {elegirPersonaje.skin_color}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Color de ojos: {elegirPersonaje.eye_color}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Año de nacimiento: {elegirPersonaje.birth_year}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Género: {elegirPersonaje.gender}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning mb-3" onClick={() => setElegirPersonaje(null)}>Volver a Personajes</button>
                </>
            )
                :
                (
                    <div className="card-container">
                        {store.personajes.map((character, index) => (
                            <div className="card m-2 card-custom bg-dark" key={index}>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={character.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-white">{character.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => fetchInfoPersonajes(character.url, index + 1)}
                                        >
                                            Detalles
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            onClick={() => añadirAFavoritos(character.name)}
                                        >
                                            <i className="bi bi-star"></i>
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