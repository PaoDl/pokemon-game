import pokemonApi from "@/api/PokemonApi";
import type { Pokemon } from "@/interfaces/Pokemon.interfaces";
import type { AxiosResponse } from "axios";
import type { ListPokemonOptions } from '@/interfaces/ListPokemonOptions.interfaces';


const getPokemons= (): number[]=>{
    const pokemonArr: number[]=Array.from(Array(650))

    return pokemonArr.map(( _ , index)=> index + 1) //realiza un mapeo del array y regresa un index sin 0
    
}
const getPokemonOptions = async():Promise <ListPokemonOptions[]>=>{
    const mixedPokemons: number[]= getPokemons().sort(()=> Math.random()- 0.5); //realiza un mix de los pokemon  usando un rando y eliminando 


    const pokemons:ListPokemonOptions[] =await getPokemonNames(mixedPokemons.splice(0,4)); //obtine las 4 posiciones
    
    return pokemons
}//al momento de enviar un async la funcion/constante se vuelve async y debe tener un await de la const llamanda

const getPokemonNames=async([a,b,c,d]: number[]=[]): Promise<ListPokemonOptions[]>=>{//cada async regresa un await y realiza la desestruccturacion

    const promiseArr= [
        pokemonApi.get(`/${a}`), //se envia una variable numerica o cualquier dentro de typescript
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
    ]
    
    const [p1,p2,p3,p4]:AxiosResponse<Pokemon>[] =await Promise.all(promiseArr) //envia la promesa que contiene el arry promise
    
    return[
        {id:p1.data.id,name:p1.data.name},
        {id:p2.data.id,name:p2.data.name},
        {id:p3.data.id,name:p3.data.name},
        {id:p4.data.id,name:p4.data.name}
    ]
    
}

export default getPokemonOptions