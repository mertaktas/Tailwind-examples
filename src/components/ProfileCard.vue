<template>
  <div class="flex items-center justify-center">
      <div class="rounded-lg w-52 shadow-lg overflow-hidden">
        <img class="w-full" src="@/assets/profile-card/background.png">
        <div class="relative flex justify-center align-center">
            <img class="absolute w-16 -top-6 text-center" src="@/assets/profile-card/profile.png" alt="" srcset="">
        </div>
        <div class="p-6 pt-12 w-full flex flex-col text-center">
            <div class="px-4">
                <h3 class=" text-l font-normal  text-black">AnthonyJibueze</h3>
                <h4 class="text-xs text-gray-600">Design</h4>
                <p class="mt-1 text-center text-gray-600 text-xxs">I love design because it lets me do fun stuff like this.</p>
            </div>
            <ul class="px-3">
                <li class="pt-2 flex items-center">
                    <img class="w-3" src="@/assets/profile-card/mail.svg">
                    <span class="text-xxxs ml-2">AnthonyJibueze@gmail.com</span>
                </li>
                <li class="pt-2 flex items-center">
                    <img class="w-3" src="@/assets/profile-card/figma.svg">
                    <span class="text-xxxs ml-2">https://www.figma.com/@ynotdesigns</span>
                </li>
                <li class="pt-2 flex items-center">
                    <img class="w-3" src="@/assets/profile-card/twitter.svg">
                    <span class="text-xxxs ml-2">https://twitter.com/ynot_design</span>
                </li>
                <li class="pt-2 flex items-center">
                    <img class="w-3" src="@/assets/profile-card/in.svg">
                    <span class="text-xxxs ml-2">https://www.linkedin.com/in</span>
                </li>
                <li class="pt-2 flex items-center">
                    <img class="w-3" src="@/assets/profile-card/git.svg">
                    <span class="text-xxxs ml-2">https://github.com/AnthonyJibueze</span>
                </li>

            </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>