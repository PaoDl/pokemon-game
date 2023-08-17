<script lang="ts">
import type { VueElement } from 'vue';

    import PokemonOptions from '@/components/PokemonOptions.vue'
    import PokemonPicture from '@/components/PokemonPicture.vue'
    export default{
        components:{ PokemonOptions, PokemonPicture}
        

        
    }
    
</script>
    
<template>
  <h1>¿Quien es este Pokemon?</h1>

  <PokemonPicture :pokemonId='3' :showPokemon="false" />
  <PokemonOptions />
</template>

<style>
 
</style>
