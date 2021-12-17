<template>
  <table>
      <thead>
          <tr class="bg-gray-100 border-b-2 border-gray-400">
              <th></th>
              <th>
                  <span>Ranking</span>
              </th>
              <th>nombre</th>
              <th>precio</th>
              <th>Mercado</th>
              <th>Variacion 24hrs</th>
              <td></td>
          </tr>
      </thead>
      <tbody>
          <tr class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td class="hidden sm:block"></td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
    name:'pxAssetsTable',


    props: {
        asserts:{//permite validar el tipo
            type: Array,
            default:()=>[] //propiedad que devuelve un array 
        }
    }
}
</script>

<style scoped>
.up::before{
    content: 'arriba';
}
.down::before{
    content: 'abajo';
}
td{
    padding: 20px 0px;
    font-size: 0.6rem;
    text-align: center;
}
th{
    padding: 5px;
    font-size: 0.6rem;
}
@media (min-width: 640px){
    td,
    th{
        padding: 20px;
        font-size: 1rem;
    }

    th{
        padding: 12px;
    }
}
</style>