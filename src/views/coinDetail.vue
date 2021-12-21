<template>
  <div  class="flex-col">
      <template>
          <div class="flex flex-col sm:flex-row justify-around items-center"> <!--cantidad igual de espacio en cada lado de cada elemento-->
            <div class="flex flex-col items-center">
                <img class="w-20 h-20 mr-5"/>
                <h1 class="sm:mr-2 text-gray-600">
                    <small class="sm:mr-2 text-gray-500"></small>
                </h1>
            </div>
          </div>

          <div class="my-10 flex flex-col">
              <ul>
                  <li class="flex justify-between">
                      <b class="text-gray-600 mt-10 uppercase">
                          Ranking
                      </b>
                      <span></span>
                  </li>
                  <li class="flex justify-between">
                      <b class="text-gray-600 mt-10 uppercase">
                          precio actual
                      </b>
                      <span></span>
                  </li>
                  <li class="flex justify-between">
                      <b class="text-gray-600 mt-10 uppercase">
                          precio más bajo
                      </b>
                      <span></span>
                  </li>
                  <li class="flex justify-between">
                      <b class="text-gray-600 mt-10 uppercase">
                          precio más alto
                      </b>
                      <span></span>
                  </li>
                  <li class="flex justify-between">
                      <b class="text-gray-600 mt-10 uppercase">
                          precio promedio
                      </b>
                      <span></span>
                  </li>
                  <li class="flex justify-between">
                      <b class="text-gray-600 mt-10 uppercase">
                          variación 24hrs
                      </b>
                      <span></span>
                  </li>
              </ul>
          </div>
          <div class="flex flex-col sm:flex-row justify-around items-center">
              <button class="bg-green-500 hover:bg-green-700 text-white font-bold"> cambiar</button>

              <div class="flex flex-row my-5">
                  <label class="w-full" for="convertValue">
                    <input 
                    id="convertValue"
                    type="number"
                    class="text-center bg-white focus:outline-none focus:shadow-outline"
                    />
                </label>
                <span class="text-xl"></span>
              </div>
          </div>
      </template>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>