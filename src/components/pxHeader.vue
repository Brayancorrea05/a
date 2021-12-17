<template>
  <header class="shadow w-screen"><!--se ajusta en toda la pantalla -->
      <nav>
          <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6"><!--bg:color de fondo, p:padding-->
              <div class="flex items-center felx-shrink-0 text-white mr-6">
                  <span class="font-semibold text-xl tracking-tight">hola</span>
              </div>
            <div class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow"></div>
            </div><!--w:width, mr:margen-->
          </nav>
      </nav>
  </header>
</template>

<script>
export default {
    name:'pxHeader'
}
</script>

<style>

</style>