<template>
    <div id = 'tar-bar'>
      <slot></slot>
    </div>
</template>
<script>
export default {
    name:'TabBar'
}
</script>
<style  scoped>
#tar-bar {
    display: flex;
    position: fixed;
    background-color: #f6f6f6;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -5px 1px rgba(100, 100,100, 0.08);
  }
  
</style>