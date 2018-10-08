<template>
  <div class="container mx-auto font-sans antialiased my-16 text-black">
    <h1 class="uppercase mb-8">Popular Games</h1>
    <get-json endpoint="https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=name,genres.name,cover,popularity&order=popularity:desc&expand=genres">
      <grid-layout slot-scope="{ response: games }" :games="games"></grid-layout>
    </get-json>

    <h1 class="uppercase mb-8">Vertical Layout</h1>
    <get-json endpoint="https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=name,genres.name,cover,popularity&order=popularity:desc&expand=genres">
      <div class="game-container" slot-scope="{ response: games }">
        <a href="#" v-for="game in games" :key="game.id" :class="`block mb-12 no-underline flex`">
          <img :src="game.cover.url" alt="cover">
          <div class="ml-6">
            <div class="text-black font-semibold text-lg">{{ game.name }}</div>
            <div class="text-grey-darker text-base pb-1">{{ game.genres[0].name }}</div>
          </div>
        </a>
      </div>
    </get-json>

    <h1 class="uppercase mb-8">Search (Super Mario)</h1>
    <get-json endpoint="https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?search=Super Mario&fields=name,cover,genres.name&expand=genres">
      <grid-layout slot-scope="{ response: games }" :games="games"></grid-layout>
    </get-json>
  </div>
</template>

<script>
import GetJson from './components/GetJson'
import GridLayout from './components/GridLayout'
import './assets/css/main.css'

export default {
  name: 'app',
  components: {
    GetJson,
    GridLayout
  }
}
</script>
