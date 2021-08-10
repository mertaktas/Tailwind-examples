<template>
  <div @mouseover="hover = true" @mouseout="hover = false" class="relative">
      <img class="rounded-lg w-full"  :src="`${src}`">
      <div v-if="hover" class="opacity-50 absolute bg-dark inset-0 w-full h-full rounded-lg"></div>
      <div class="opacity-0 hover:opacity-100 transition-all flex absolute top-0 w-full h-full flex-col justify-between p-3">
          <div class="flex items-center justify-between">
              <button class="flex items-center" type="button" name="button">
                  <p class="font-semibold text-white"> {{ board }} </p>
                  <span class="material-icons text-muted">expand_more</span>
              </button>
              <button type="button" name="button" class="rounded-full py-3 px-5 text-white bg-primary font-semibold">
                  Save
              </button>
          </div>
          <div class="flex items-center w-full">
              <button type="button" name="button" class="ml-auto mr-2 bg-white rounded-full text-sm w-8 h-8 items-center justify-center text-dark opacity-80 hover:opacity-100">
                  <span class="material-icons">ios_share</span>
              </button>
              <button type="button" name="button" class="bg-white rounded-full w-8 h-8 items-center justify-center text-dark opacity-80 hover:opacity-100">
                  <span class="material-icons text-base">more_horiz</span>
              </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
    src: String,
    board: String
    },
    data() {
        return {
            hover: false
        }
    }
}
</script>

<style>

</style>