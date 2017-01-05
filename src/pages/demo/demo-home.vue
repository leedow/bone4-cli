<template>
  <div id="demohome">
    <h1>Bone4 cli</h1>
    <h2>移动WebApp开发指南及设计规范</h2>
    <div v-for="item in selectData" class="list">
      <a :href="item.url" target="_blank">
        {{item.name}}
      </a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'demohome',
  components: {

  },
  computed: {
    selectData() {
      return this.$store.state.demo.selectData
    }
  }
}
</script>

<style scope lang="less">
#demohome {
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
h2{
  font-size: 14px;
  font-weight: normal;
  color: #999;
}
a{
  color: #444;
  padding: 5px 0;
  display: block;
  text-decoration: none;
}
a:hover{
  color: #ff3300;
}
.list{
  padding-top:20px;
}
</style>
