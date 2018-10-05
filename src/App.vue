<template>
  <div class="container mx-auto font-sans antialiased my-16 text-black">
    <h1 class="uppercase mb-8">Popular Games</h1>
    <game-list></game-list>
  </div>
</template>

<script>
import GameList from './components/GameList'
import './assets/css/main.css'

export default {
  name: 'app',
  components: {
    GameList
  }
}
</script>
