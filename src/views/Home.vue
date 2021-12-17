<template>
  <div class="home">
    <px-assets-table/>
  </div>
</template>

<script>
// @ is an alias to /src
import pxAssetsTable from '@/components/pxAssetsTable.vue'

export default {
  name: 'Home',
  components: {
    pxAssetsTable
  }
}
</script>
