import axios from 'axios'; //paqueteria para  usar apis  se instala axios yarn add axios
const pokemonApi = axios.create({
 baseURL:'https://pokeapi.co/api/v2/pokemon/' //url base para el uso de la api
})

export default pokemonApi
