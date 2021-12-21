<template>
  <div class="flex-col">
      <template v-if="asset.id">
          <div class="flex flex-col sm:flex-row justify-around items-center"> <!--cantidad igual de espacio en cada lado de cada elemento-->
                <div class="flex flex-col items-center">
                    <img :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`" 
                    class="w-20 h-20"
                    :alt="asset.name"
                    />
                    <h1 class="text-6xl">
                        {{asset.name}}
                        <small class="sm:mr-2 text-gray-500">{{asset.symbol}}</small>
                    </h1>
                </div>
          

                <div class="my-10 flex flex-col">
                    <ul>
                        <li class="flex justify-center">
                            <b class="text-gray-600 mr-5 uppercase">
                                Ranking
                            </b>
                            <span>{{asset.rank}}</span>
                        </li>
                        <li class="flex justify-center">
                            <b class="text-gray-600 mr-5 uppercase">
                                precio actual
                            </b>
                            <span>{{asset.priceUsd |dollar}}</span>
                        </li>
                        <li class="flex justify-center">
                            <b class="text-gray-600 mr-5 uppercase">
                                precio más bajo
                            </b>
                            <span>{{ min }}</span>
                        </li>
                        <li class="flex justify-center">
                            <b class="text-gray-600 mr-5 uppercase">
                                precio más alto
                            </b>
                            <span>{{ max }}</span>
                        </li>
                        <li class="flex justify-center">
                            <b class="text-gray-600 mr-5 uppercase">
                                precio promedio
                            </b>
                            <span>{{ avg }}</span>
                        </li>
                        <li class="flex justify-center">
                            <b class="text-gray-600 mr-5 uppercase">
                                variación 24hrs
                            </b>
                            <span>{{asset.changePercent24Hr|percent}}</span>
                        </li>
                    </ul>
                </div>
          
                <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"> 
                        cambiar
                    </button>

                        <div class="flex flex-row my-5">
                            <label class="w-full" for="convertValue">
                                <input 
                                id="convertValue"
                                type="number"
                                class="text-center bg-white focus:outline-none focus:shadow-outline border"
                                />
                            </label>
                        </div>
                     <span class="text-xl"></span>
                </div>
          </div>
      </template>
  </div>
</template>

<script>
import api from '@/api'

export default {
    name:'coinDetail',

    data(){
        return{
            asset:{},
            history:[]
        }
    },

    created(){
        this.getCoin()
    },

    methods:{
        getCoin(){
            const id= this.$route.params.id
            Promise.all([api.getAsset(id), api.getAssetHistory(id)]).then(
                ([asset, history]) => {
                this.asset= asset
                this.history= history}
            )
        }
    },

    computed:{
        min(){
            return Math.min(
                ... this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
            )
        },
        max(){
            return Math.max(
                ... this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
            )
        },
        avg(){
            return Math.abs(
                ... this.history.map(h => parseFloat(h.priceUsd).toFixed(2))
            )
        }
    }
}
</script>

<style>

</style>