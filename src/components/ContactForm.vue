<template>
  <div
    class="relative min-w-2xl bg-white px-16 pt-20 pb-28 rounded-lg shadow-xl"
  >
    <h1 class="text-center font-bold text-blueGray-900 text-2xl">
      Send Us A Message
    </h1>
    <div class="flex flex-col w-full pt-16 space-y-8">
      <input
        class="
          text-gray-400
          font-medium
          w-96
          flex
          placeholder-gray-600
          text-md
          outline-none
          pb-2
          border-b-2 border-black-700
        "
        type="text"
        placeholder="Full name"
      />
      <input
        class="
          text-gray-400
          font-medium
          w-96
          flex
          placeholder-gray-600
          text-md
          outline-none
          pb-2
          border-b-2 border-black-700
        "
        type="text"
        placeholder="Your email"
      />
      <div class="relative w-full">
        <img
          class="pointer-events-none absolute right-0"
          src="@/assets/contact-form/ar.svg"
          alt=""
          srcset=""
        />
        <select
          class="
            z-index-10
            w-full
            appearance-none
            text-black
            ring-0
            font-bold
            outline-none
            pb-2
            border-b-2 border-black-700
          "
          name="post"
          id="post"
        >
          <option
            class="text-black border-none outline-none"
            value="I want to post"
          >
            I want to post
          </option>
        </select>
      </div>
      <textarea
        class="border border-1 border-gray-300 rounded-lg p-6"
        name="message"
        id="message"
        cols="30"
        rows="4"
        placeholder="Your message goes here..."
      ></textarea>
      <input
        class="bg-blueGray-900 text-white rounded-full py-6"
        type="button"
        value="Submit Form"
      />
    </div>
    <div
      class="absolute top-3 right-3 p-2 border-gray-200 border-2 rounded-full"
    >
      <img src="@/assets/contact-form/cancel.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>