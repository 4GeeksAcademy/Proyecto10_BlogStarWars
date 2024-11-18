const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			vehiculos: [],
			favorites: [],
		},

		actions: {

			// OBTENER PERSONAJES
			getPersonajes: () => {
				fetch("https://swapi.tech/api/people")
					.then((res) => res.json())
					.then((data) => {
						setStore({ personajes: data.results });
					})
					.catch((err) => console.error(err));
			},

			// OBTENER PLANETAS
			getPlanetas: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then((res) => res.json())
					.then((data) => {
						setStore({ planetas: data.results });
					})
					.catch((err) => console.error(err));
			},

			// ONTENER VEHICULOS
			getVehiculos: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then((res) => res.json())
					.then((data) => {
						setStore({ vehiculos: data.results });
					})
					.catch((err) => console.error(err));
			},

			// AÑADIR A FAVORITOS
			añadirFavorito: (item) => {
				const store = getStore();
				if (!store.favorites.includes(item)) {
					setStore({ favorites: [...store.favorites, item] });
				}
			},

			// BORRAR DE FAVORITOS
			borrarFavorito: (index) => {
				const store = getStore();
				setStore({
					favorites: store.favorites.filter((_, i) => i !== index)
				});
			}
		},
	}
};

export default getState;
