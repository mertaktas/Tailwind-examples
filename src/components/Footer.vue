<template>
  <div class="py-14 h-auto w-full bg-white px-16 rounded-lg shadow-2xl flex flex-col">
      <!-- Footer Top -->
      <div class="flex justify-between space-x-6">
          <div class="py-8 px-4 w-96 flex items-start justify-center border border-gray-100 rounded-lg shadow-sm">
              <img src="@/assets/footer-component/lovely.png" alt="" srcset="">
              <div class="flex flex-col ml-4 w-full">
                  <h2 class="font-extrabold text-gray-900 text-lg">Do you have designs to spare?</h2>
                  <p class="font-bold py-6 text-gray-900 text-sm">Donate your design and contribute to the community.</p>
                  <button class="py-2 px-8 bg-gray-800 text-white rounded-lg w-40">Donate now!</button>
              </div>
          </div>
          <ul class="py-8 px-4 w-60 flex flex-col space-y-3">
              <h4 class="text-pink-400 font-semibold">Explore</h4>
              <li>
                  <a href="">Free designs</a>
              </li>
              <li>
                  <a class="font-bold" href="">Latest designs</a>
              </li>
              <li>
                  <a href="">Most popular designs</a>
              </li>
              <li>
                  <a href="">Contributors</a>
              </li>
          </ul>
          <ul class="py-8 px-4 flex flex-col space-y-3">
              <h4 class="text-pink-400 font-semibold">Site</h4>
              <li>
                  <a href="">License</a>
              </li>
              <li>
                  <a href="">Articles</a>
              </li>
              <li>
                  <a href="">About</a>
              </li>
              <li>
                  <a href="">Support</a>
              </li>
              <li>
                  <a href="">Sponsor UI Design Daily</a>
              </li>
          </ul>
          <div class="py-8 px-4 flex flex-col">
              <div class="flex flex-col">
                  <h4 class="text-pink-400 font-semibold">Follow Us</h4>
                  <ul class="flex pt-4 space-x-3">
                      <li>
                          <a href="">
                              <img src="@/assets/footer-component/dribbble.svg" alt="">
                          </a>
                      </li>
                      <li>
                          <a href="">
                              <img src="@/assets/footer-component/twitter.svg" alt="">
                          </a>
                      </li>
                      <li>
                          <a href="">
                              <img src="@/assets/footer-component/instagram.svg" alt="">
                          </a>
                      </li>
                  </ul>
              </div>
              <a href="" class="mt-10 flex items-center justify-between p-2 bg-blueGray-50 rounded-full border border-gray-100">
                  <img class="w-8 h-8" src="@/assets/footer-component/join.png" alt="">
                  <p class="font-black ml-4 w-32">Join our Slack channel</p>
              </a>
          </div>
      </div>
      <!-- Footer Mid -->
      <div class="w-full bg-gray-50 border border-gray-100 rounded-lg flex items center justify-center py-14 mt-10">
          <div class="px-1 py-0.5 border-2 border-gray-400 rounded-lg">
              <span class="text-gray-400 font-bold text-sm">Ad</span>
          </div>
      </div>
      <!-- Footer Bottom -->
      <div class="flex justify-between items-center pt-10">
          <div class="text-gray-500 font-semibold">Legal</div>
          <div class="text-gray-500 font-semibold">© 2021 UI Design Daily All rights reserved</div>
          <div class="text-right">
              <span class="font-extrabold text-2xl">1384</span>
              <p class="font-bold">Design files donated</p>
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