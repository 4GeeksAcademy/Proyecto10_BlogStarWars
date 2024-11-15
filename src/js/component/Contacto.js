import React from "react";
import "../../styles/index.css";


const Contacto = () => {
    return (
        <div className="contact container">
            <div className="row">
                {/* PEQUEÑA DESCRIPCION GENERAL */}
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="">
                            <h2 className="card-title text-warning">HISTORIA</h2>

                            <p className="text-white">
                                La historia de Star Wars abarca generaciones, con épicas batallas espaciales, intrigas políticas, y una constante lucha entre el bien y el mal. Personajes icónicos como Darth Vader, Luke Skywalker, Leia Organa y muchos más, han dejado una huella indeleble en la cultura popular galáctica.
                            </p>

                            <p className="card-title text-warning">
                                Gracias querido lector y... QUE LA FUERZA TE ACOMPAÑE!!!
                            </p>
                        </div>
                    </div>
                </div>
                {/* FormuContacto */}
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="">
                            <h2 className="card-title text-warning">Contactanos</h2>
                            <p>Comentanos que te ha parecido este blog, estamos encantados de leer vuestras opiniones</p>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label text-white">Nombre</label>
                                    <input type="text" className="form-control" id="fullName" name="Nombre" placeholder="Nombre" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-white">Correo</label>
                                    <input type="email" className="form-control" id="correo" name="correo" placeholder="Correo" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label text-white">Mensaje</label>
                                    <textarea className="form-control" id="mensaje" name="mensaje" rows="5" placeholder="Cuentanos tu opinión, alguna duda o petición que tengas...GRACIAS"></textarea>
                                </div>
                                <button type="submit" className="btn btn-warning">Envialo mi querido Padawan</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
