<template>  
    <div class='tar-bar-item' @click="itemClick">
        <div v-if="isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
        
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
            this.isActive = !this.isActive
        }
    }
}
</script>
<style scoped>
.tar-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
.tar-bar-item img {
    width: 24px;
    height: 24px;
}

</style>