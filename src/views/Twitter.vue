<template>
  <div class="flex h-screen w-full">
    <!-- Main -->
    <div class="w-full relative">
      <!-- Main Header -->
      <div
        class="
          fixed
          top-0
          index
          z-10
          bg-white
          flex
          py-2
          px-4
          items-center
          justify-between
          w-full
          border-b-2 border-gray-100
        "
      >
        <div class="flex items-center">
          <img
            class="w-8 h-8 overflow-hidden rounded-full border border-gray-100"
            src="@/assets/twitter/profile.png"
            alt=""
            srcset=""
          />
          <h2 class="pl-6 text-lg font-black text-black">Home Page</h2>
        </div>
        <img class="w-6" src="@/assets/twitter/star.svg" alt="" srcset="" />
      </div>
      <!-- Post List -->
      <div
        class="
          w-full
          h-auto
          flex flex-col
          mt-12
          pb-16
          px-4
          border-b-2 border-gray-100
        "
      >
        <div class="flex py-2">
          <div class="w-1/5">
            <img
              class="w-12 h-12 ov rounded-full border border-gray-100"
              src="@/assets/twitter/elon.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full">
            <div class="flex items-center">
              <h2 class="text-black font-extrabold text-sm">Martha Craig</h2>
              <span class="pl-1">@craig_love · 12h</span>
            </div>
            <p class="text-xs leading-5">
              UXR/UX: You can only bring one item to a remote island to assist
              your research of native use of tools and usability. What do you
              bring? #TellMeAboutYou
            </p>
            <div class="flex items-center justify-between pt-2">
              <button class="flex items-center">
                <img src="@/assets/twitter/comment.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">23</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/retweet.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">20</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/like.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">56</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/upload.svg" alt="" srcset="" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex py-2">
          <div class="w-1/5">
            <img
              class="w-12 h-12 ov rounded-full border border-gray-100"
              src="@/assets/twitter/kevin.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full">
            <div class="flex items-center">
              <h2 class="text-black font-extrabold text-sm">Maximmilian</h2>
              <span class="pl-1">@maxjacobson · 3h</span>
            </div>
            <p class="text-xs leading-5">Y’all ready for this next post?</p>
            <div class="flex items-center justify-between pt-2">
              <button class="flex items-center">
                <img src="@/assets/twitter/comment.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">14</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/retweet.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">35</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/like.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">87</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/upload.svg" alt="" srcset="" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex py-2">
          <div class="w-1/5">
            <img
              class="w-12 h-12 ov rounded-full border border-gray-100"
              src="@/assets/twitter/monk.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full">
            <div class="flex items-center">
              <h2 class="text-black font-extrabold text-sm">Tabitha Potter</h2>
              <span class="pl-1">@mis_potter ·14h</span>
            </div>
            <p class="text-xs leading-5">
              Kobe’s passing is really sticking w/ me in a way I didn’t expect.
              He was an icon, the kind of person who wouldn’t die this way. My
              wife compared it to Princess Di’s accident. But the end can happen
              for anyone at any time, & I can’t help but think of anything else
              lately.
            </p>
            <div class="flex items-center justify-between pt-2">
              <button class="flex items-center">
                <img src="@/assets/twitter/comment.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">23</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/retweet.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">20</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/like.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">56</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/upload.svg" alt="" srcset="" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex py-2">
          <div class="w-1/5">
            <img
              class="w-12 h-12 ov rounded-full border border-gray-100"
              src="@/assets/twitter/elon.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full">
            <div class="flex items-center">
              <h2 class="text-black font-extrabold text-sm">Martha Craig</h2>
              <span class="pl-1">@craig_love · 12h</span>
            </div>
            <p class="text-xs leading-5">
              UXR/UX: You can only bring one item to a remote island to assist
              your research of native use of tools and usability. What do you
              bring? #TellMeAboutYou
            </p>
            <div class="flex items-center justify-between pt-2">
              <button class="flex items-center">
                <img src="@/assets/twitter/comment.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">23</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/retweet.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">20</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/like.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">56</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/upload.svg" alt="" srcset="" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex py-2">
          <div class="w-1/5">
            <img
              class="w-12 h-12 ov rounded-full border border-gray-100"
              src="@/assets/twitter/kevin.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full">
            <div class="flex items-center">
              <h2 class="text-black font-extrabold text-sm">Maximmilian</h2>
              <span class="pl-1">@maxjacobson · 3h</span>
            </div>
            <p class="text-xs leading-5">Y’all ready for this next post?</p>
            <div class="flex items-center justify-between pt-2">
              <button class="flex items-center">
                <img src="@/assets/twitter/comment.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">14</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/retweet.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">35</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/like.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">87</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/upload.svg" alt="" srcset="" />
              </button>
            </div>
          </div>
        </div>
        <div class="flex py-2">
          <div class="w-1/5">
            <img
              class="w-12 h-12 ov rounded-full border border-gray-100"
              src="@/assets/twitter/monk.jpg"
              alt=""
              srcset=""
            />
          </div>
          <div class="w-full">
            <div class="flex items-center">
              <h2 class="text-black font-extrabold text-sm">Tabitha Potter</h2>
              <span class="pl-1">@mis_potter ·14h</span>
            </div>
            <p class="text-xs leading-5">
              Kobe’s passing is really sticking w/ me in a way I didn’t expect.
              He was an icon, the kind of person who wouldn’t die this way. My
              wife compared it to Princess Di’s accident. But the end can happen
              for anyone at any time, & I can’t help but think of anything else
              lately.
            </p>
            <div class="flex items-center justify-between pt-2">
              <button class="flex items-center">
                <img src="@/assets/twitter/comment.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">23</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/retweet.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">20</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/like.svg" alt="" srcset="" />
                <span class="pl-2 text-sm">56</span>
              </button>
              <button class="flex items-center">
                <img src="@/assets/twitter/upload.svg" alt="" srcset="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          fixed
          items-center
          flex
          justify-between
          bottom-0
          w-full
          bg-white
          px-8
          py-4
        "
      >
        <img class="w-6" src="@/assets/twitter/home.svg" alt="" srcset="" />
        <img class="w-5" src="@/assets/twitter/search.svg" alt="" srcset="" />
        <img
          class="w-5"
          src="@/assets/twitter/notification.svg"
          alt=""
          srcset=""
        />
        <img class="w-5" src="@/assets/twitter/message.svg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>