<template>
  <div class="dashboard-container">
    <!--<div class="dashboard-text">name:{{name}}</div>-->
    <!--<div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>-->
    <el-button type="primary" @click="getSource">getSource</el-button>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import sourceService from '@/api/source'

export default {
  name: 'dashboard',
  methods: {
    getSource() {
      sourceService.getSource('aaa').then(response => {
        const result = response
      })
    }
  }
//  computed: {
//    ...mapGetters([
//      'name',
//      'roles'
//    ])
//  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
