<template>
  <div id="app">
    <h1>Bone4 cli</h1>
    <div v-for="item in selectData">
      {{item.name}}
    </div>
    <hello></hello>
    <router-view/>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  },
  computed: {
    selectData() {
      return this.$store.state.demo.selectData
    }
  }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  font-weight: normal;
}
</style>
