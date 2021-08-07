<template>
  <div class="w-80 rounded-lg shadow-xl overflow-hidden">
    <img
      class="w-full"
      src="@/assets/event-card/event-card-image.png"
      alt=""
      srcset=""
    />
    <div class="flex flex-col items-center bg-white py-12 px-10">
      <h2 class="font-extrabold text-gray-800 text-xl leading-3">
        Youth workshop
      </h2>
      <div class="flex items-center justify-center pt-4 space-x-1">
        <img
          class="w-5 h-5"
          src="@/assets/event-card/event.svg"
          alt=""
          srcset=""
        />
        <p class="text-gray-800 font-semibold text-sm">Tomorrow at 10:00 AM</p>
      </div>
      <p class="pt-4 font-bold text-center text-gray-800">
        We will make 3D prints with recycled materials
      </p>
      <button
        class="
          py-4
          mt-4
          w-full
          bg-gray-900
          text-white
          font-bold
          rounded-lg
          hover:bg-gray-800
          transition-all
        "
      >
        Register
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>