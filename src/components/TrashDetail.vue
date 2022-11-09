<template>
  <!-- 回收站笔记本详情页 -->
  <div id="trash-detail">
    <h1>{{msg}} : {{$route.params.noteId}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: '回收站笔记本详情页'
      }
    }
  }
</script>

<style scoped>
h1 {
  color: blue;
}
</style>