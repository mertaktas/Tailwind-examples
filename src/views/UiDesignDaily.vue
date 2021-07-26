<template>
  <div class="bg-gray-100 w-full h-full py-5 px-10">
      <div class="w-full max-w-7xl h-auto bg-gray-50 rounded-lg shadow-xl py-7 px-10 mx-auto">
          <!-- Navbar -->
          <div class="flex items-center justify-between">
              <div class="flex justify-center items-center">
                  <img class="pr-2" src="@/assets/logo.svg" alt="" srcset="">
                  <span class="font-bold">Design Daily</span>
              </div>
              <ul class="flex items-center justify-center space-x-1 text-base">
                  <li>
                      <a class="px-3 py-2 font-bold bg-blueGray-100 rounded-full" href="#">Free designs</a>
                  </li>
                  <li>
                      <a class="px-3 py-2" href="#">License</a>
                  </li>
                  <li>
                      <a class="px-3 py-2" href="#">Articles</a>
                  </li>
                  <li>
                      <a class="px-3 py-2" href="#">Contributors</a>
                  </li>
                  <li>
                      <a href="#">About</a>
                  </li>
              </ul>
              <div class="space-x-2">
                  <button class="p-3 px-6 font-bold">Log in</button>
                  <button class="p-3 bg-blueGray-800 text-white rounded-lg px-6">Sign Up</button>
              </div>
          </div>
          <!-- İnner Section -->
          <div class="mt-4 relative w-full h-96 flex flex-col justify-center items-center border-t-2 border-gray-100">
              <div class="px-2 py-1 text-pink-400 font-bold text-sm absolute top-10 left-4 bg-white rounded-lg">Day 1384</div>
              <div class="text-center pt-4">
                  <h2 class="font-black text-xl">Free UI resources for everyone</h2>
                  <p class="pt-6 max-w-lg w-full text-center font-semibold">The largest database of 100% free UI components and designs available in the formats popular by UI designers.</p>
              </div>
              <div class="pt-6 flex w-1/2 shadow-xl rounded-lg overflow-hidden">
                  <div class="relative border-r-2 border-gray-100 w-1/3 mt-4">
                    <select class="font-semibold p-2 appearance-none ring-0 outline-none w-full" name="design" id="design">
                        <option value="Free designs">Free designs</option>
                    </select>
                    <img class="absolute top-2 right-2 pointer-events-none" src="@/assets/ar.svg" alt="" srcset="">
                  </div>
                  <div class="relative w-2/3 mt-4">
                    <input class="p-2 pl-8 w-full" type="text" placeholder="Search">
                    <img class="absolute top-2 left-2 w-6 h-6 text-gray-100" src="@/assets/search.svg" alt="" srcset="">
                  </div>
              </div>
          </div>
          <!-- Main Section -->
          <div class="mt-6">
            <!-- Button Selectors -->
            <div class="flex items-center justify-between">
                <div class="flex p-1 border border-gray-100 bg-gray-50 overflow-hidden rounded-full space-x-1">
                    <button class="px-5 py-2 border-2 border-gray-100 bg-white rounded-full shadow-lg font-semibold">Latest</button>
                    <button class="px-5 py-2 rounded-full text-gray-400">Popular</button>
                </div>
                <div class="flex space-x-2">
                    <button class="px-3 py-2 border border-gray-200 rounded-full font-bold">All</button>
                    <button class="px-3 py-2">Web</button>
                    <button class="px-3 py-2">Mobile</button>
                    <button class="px-3 py-2">UI Kit</button>
                    <button class="px-3 py-2">Coded</button>
                </div>
                <div class="flex space-x-3">
                    <div class="px-3 py-3 border-2 border-gray-100 rounded-full bg-gray-50">
                        <img class="w-5 h-5" src="@/assets/figma.svg" alt="" srcset="">
                    </div>
                    <div class="px-3 py-3 border border-pink-300 rounded-full bg-gray-50">
                        <img class="w-5 h-5" src="@/assets/sketch.svg" alt="" srcset="">
                    </div>
                    <div class="px-3 py-3 border-2 border-gray-100 rounded-full bg-gray-50">
                        <img class="w-5 h-5" src="@/assets/brand.svg" alt="" srcset="">
                    </div>
                    <div class="px-3 py-3 border-2 border-gray-100 rounded-full bg-gray-50">
                        <img class="w-5 h-5" src="@/assets/xd.svg" alt="" srcset="">
                    </div>
                    <div class="px-3 py-3 border-2 border-gray-100 rounded-full bg-gray-50">
                        <img class="w-5 h-5" src="@/assets/ps.svg" alt="" srcset="">
                    </div>
                </div>
            </div>
            <!-- Card Lists -->
            <div class="grid grid-cols-3 gap-6 mt-8">
                <!-- Card -->
                <div class="relative">
                    <img src="@/assets/card-image.png" alt="" srcset="">
                    <div class="px-3 py-3 absolute top-4 left-4 inline-flex border border-gray-100 rounded-full bg-gray-50">
                        <img class="w-5 h-5" src="@/assets/sketch.svg" alt="" srcset="">
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <div class="flex items-center">
                            <img class="pr-3" src="@/assets/card-profile.png" alt="" srcset="">
                            <p class="font-semibold text-black text-sm">by <strong class="font-black">Jenny Molla</strong></p>
                        </div>
                        <div class="flex items-center space-x-5">
                            <div class="flex space-x-1">
                                <img src="@/assets/code.svg" alt="" srcset="">
                                <p class="font-bold">25</p>
                            </div>
                            <div class="flex items-center space-x-1">
                                <img src="@/assets/like.svg" alt="" srcset="">
                                <p class="font-bold">25</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img src="@/assets/card-image.png" alt="" srcset="">
                    <div class="px-3 py-3 absolute top-4 left-4 inline-flex border border-gray-100 rounded-full bg-gray-50">
                        <img class="w-5 h-5" src="@/assets/sketch.svg" alt="" srcset="">
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <div class="flex items-center">
                            <img class="pr-3" src="@/assets/card-profile.png" alt="" srcset="">
                            <p class="font-semibold text-black text-sm">by <strong class="font-black">Jenny Molla</strong></p>
                        </div>
                        <div class="flex items-center space-x-5">
                            <div class="flex space-x-1">
                                <img src="@/assets/code.svg" alt="" srcset="">
                                <p class="font-bold">25</p>
                            </div>
                            <div class="flex items-center space-x-1">
                                <img src="@/assets/like.svg" alt="" srcset="">
                                <p class="font-bold">25</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <img src="@/assets/card-image.png" alt="" srcset="">
                    <div class="px-3 py-3 absolute top-4 left-4 inline-flex border border-gray-100 rounded-full bg-gray-50">
                        <img class="w-5 h-5" src="@/assets/sketch.svg" alt="" srcset="">
                    </div>
                    <div class="flex items-center justify-between mt-4">
                        <div class="flex items-center">
                            <img class="pr-3" src="@/assets/card-profile.png" alt="" srcset="">
                            <p class="font-semibold text-black text-sm">by <strong class="font-black">Jenny Molla</strong></p>
                        </div>
                        <div class="flex items-center space-x-5">
                            <div class="flex space-x-1">
                                <img src="@/assets/code.svg" alt="" srcset="">
                                <p class="font-bold">25</p>
                            </div>
                            <div class="flex items-center space-x-1">
                                <img src="@/assets/like.svg" alt="" srcset="">
                                <p class="font-bold">25</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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