import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/cards.css";
import { PiStarThin } from "react-icons/pi";


export const Vehiculos = () => {
    const { store, actions } = useContext(Context);
    const [seleccionarVehiculo, setSeleccionarVehiculo] = useState(null);
    const [vehiculoId, setVehiculoId] = useState(null);
    const [alertaDuplicados, setAlertaDuplicados] = useState(null);

    useEffect(() => {
        actions.getVehiculos();
    }, []);

    const fetchDetallesVehiculos = (vehicleUid) => {
        fetch(`https://www.swapi.tech/api/vehicles/${vehicleUid}`)
            .then((resp) => resp.json())
            .then((data) => {
                setSeleccionarVehiculo(data.result.properties);
                setVehiculoId(vehicleUid);
            })
            .catch((error) => console.error('Error al realizar el Fetch de esta operación', error));
    };

    const añadirAFavoritos = (vehicleName) => {
        if (!store.favorites.includes(vehicleName)) {
            actions.añadirFavorito(vehicleName);
            setAlertaDuplicados(null);
        } else {
            setAlertaDuplicados(
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    <strong>{vehicleName}</strong> Ya está en tus favoritos.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setAlertaDuplicados(null)}></button>
                </div>
            );
        }
    };

    return (
        <div className="container my-6">
            {alertaDuplicados}
            {seleccionarVehiculo ? (
                <>
                    <div className="card mb-3 card-custom bg-dark">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculoId}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={seleccionarVehiculo.name}
                                />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title text-warning">{seleccionarVehiculo.name}</h5>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Modelo: {seleccionarVehiculo.model}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Fabricante: {seleccionarVehiculo.manufacturer}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Coste en créditos: {seleccionarVehiculo.cost_in_credits}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Longuitud: {seleccionarVehiculo.length}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Velocidad máxima de atmósfera: {seleccionarVehiculo.max_atmosphering_speed}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> tripulación: {seleccionarVehiculo.crew}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Pasajeros: {seleccionarVehiculo.passengers}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Capacidad de carga: {seleccionarVehiculo.cargo_capacity}</p>
                                    <p className="card-text no-margin fs-6"><i className="bi bi-caret-right"></i> Consumibles: {seleccionarVehiculo.consumables}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-warning mb-3" onClick={() => setSeleccionarVehiculo(null)}>
                        Volver a Vehiculos
                    </button>
                </>
            )
                :
                (
                    <div className="card-container">
                        {store.vehiculos?.map((vehicle, index) => (
                            <div className="card m-2 card-custom bg-dark" key={index}>
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                                    className="card-img-top custom-img-size"
                                    alt={vehicle.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-white">{vehicle.name}</h5>
                                    <div className="d-flex justify-content-between">
                                        <button
                                            className="btn btn-warning"
                                            onClick={() => fetchDetallesVehiculos(vehicle.uid)}
                                        >
                                            Detalles
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning"
                                            onClick={() => añadirAFavoritos(vehicle.name)}
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