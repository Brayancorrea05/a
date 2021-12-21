<template>
  <div class="home">
    <px-assets-table v-bind:assets="assets"/>
  </div>
</template>

<script>
// @ is an alias to /src
import pxAssetsTable from '@/components/pxAssetsTable.vue'
import api from '@/api'

export default {
  name: 'Home',
  components: {
    pxAssetsTable
  },
  data(){
    return{
      assets:[]
    }
  },
  created(){
    api.getAssets().then(assets => (this.assets=assets))
  }
}
</script>
