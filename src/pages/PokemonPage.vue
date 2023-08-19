<script lang="ts">
import type { VueElement } from 'vue';

    import PokemonOptions from '@/components/PokemonOptions.vue'
    import PokemonPicture from '@/components/PokemonPicture.vue'
    import getPokemonOptions from '@/helpers/getPokemonOptions'
    import type { ListPokemonOptions } from '@/interfaces/ListPokemonOptions.interfaces'
    
    export default{
        components:{ PokemonOptions, PokemonPicture},
        data(){ //objeto reactivo donde vue estara pendiende de los cambios
          return{
            pokemonArr:[] as ListPokemonOptions [],
            pokemon: null as ListPokemonOptions | null,
            showPokemon:false
          }
        },
        
         methods:{
          async mixPokemonArray(){
            this.pokemonArr = await getPokemonOptions()

            const rndInt = Math.floor(Math.random()*4)//realiza el random de las opciones
            this.pokemon = this.pokemonArr[rndInt]
          }
        },
        mounted(){//ejecucion de una sola vez asincrona que se ejecuta al momento de inicio 
          this.mixPokemonArray()
        }       
    }
    
</script>
    
<template>
  <h1 v-if="!pokemon">Espere por favor..</h1>
  <div v-else>
    <h1>¿Quien es este Pokemon?</h1>
    <PokemonPicture :pokemonId='pokemon.id' :showPokemon="showPokemon" />
    <PokemonOptions :pokemons="pokemonArr" />
  </div>
</template>

<style>
 
</style>
