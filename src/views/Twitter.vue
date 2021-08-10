<template>
  <div class="flex h-screen w-full justify-center">
    <!-- Main -->
    <div class="w-full relative max-w-xl m-auto lg:m-0 lg:max-w-5xl xl:max-w-7xl">
      <!-- Main Header -->
      <div class="
          lg:max-w-5xl
          xl:max-w-7xl
          max-w-xl
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
          xl:border-none
        ">
          <div class="hidden xl:block w-2/12 pl-8 fill-current text-blue-400 ">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="w-8"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
          </div>
        <div class="flex items-center justify-between w-full xl:max-w-xl xl:pl-8 xl:w-6/12">
          <div class="flex items-center">
            <img class="
                xl:hidden
                w-8
                h-8
                overflow-hidden
                rounded-full
                border border-gray-100
              " src="@/assets/twitter/profile.png" alt="" srcset="" />
            <h2 class="text-lg font-black text-black">Home Page</h2>
          </div>
          <div class="p-2 hover:bg-blue-100 rounded-full transition-all flex items-center justify-center">
            <a href="">
              <svg class="w-6 stroke-current text-blue-400" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="hidden xl:block w-4/12">
          <div class="relative px-4 pr-8">
            <input class="w-full p-2 pl-10 text-black font-normal placeholder-black rounded-full focus:outline-none bg-gray-100" type="text" placeholder="Search Twitter">
            <svg class="w-4 absolute top-2.5 left-8 fill-current text-black" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8116 16.3723C13.2436 17.6996 11.2153 18.5 9 18.5C4.02944 18.5 0 14.4706 0 9.5C0 4.52944 4.02944 0.5 9 0.5C13.9706 0.5 18 4.52944 18 9.5C18 11.7153 17.1996 13.7436 15.8723 15.3116L19.5303 18.9697C19.8232 19.2626 19.8232 19.7374 19.5303 20.0303C19.2374 20.3232 18.7626 20.3232 18.4697 20.0303L14.8116 16.3723ZM16.5 9.5C16.5 13.6421 13.1421 17 9 17C4.85786 17 1.5 13.6421 1.5 9.5C1.5 5.35786 4.85786 2 9 2C13.1421 2 16.5 5.35786 16.5 9.5Z" />
            </svg>
          </div>
        </div>
      </div>
      <!-- Post List -->
      <div class="lg:max-w-vw xl:max-w-full lg:mx-8 m-auto flex flex-row mt-12">
        <div class="xl:w-2/12 mt-4 hidden xl:block">
          <div>
            <div class="inline-flex cursor-pointer my-1 px-4 py-2 items-center transition-all hover:text-blue-400 hover:bg-blue-100 rounded-full">
              <svg class="w-6 fill-current text-blue-400" width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.9542 7.03274L1.87199 7.65115C1.51235 7.85665 1.05421 7.73171 0.848702 7.37207C0.643194 7.01243 0.768142 6.55429 1.12778 6.34878L10.6355 0.915798C11.4809 0.43269 12.5188 0.43269 13.3643 0.915798L22.872 6.34878C23.2316 6.55429 23.3566 7.01243 23.1511 7.37207C22.9456 7.73171 22.4874 7.85665 22.1278 7.65115L21.0456 7.03274L19.6001 17.5124C19.3442 19.3679 17.7583 20.75 15.8853 20.75H8.11449C6.24142 20.75 4.6556 19.3679 4.39966 17.5124L2.9542 7.03274ZM12 13.9999C13.7949 13.9999 15.25 12.5449 15.25 10.7499C15.25 8.95501 13.7949 7.49994 12 7.49994C10.2051 7.49994 8.75 8.95501 8.75 10.7499C8.75 12.5449 10.2051 13.9999 12 13.9999Z" />
              </svg>
              <h2 class="font-extrabold text-xl pl-4 text-blue-400">Home</h2>
            </div>
            <div class="inline-flex cursor-pointer my-1 px-4 py-2 items-center transition-all hover:text-blue-400 hover:bg-blue-100 rounded-full">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 fill-current text-black "><g><path d="M21 7.337h-3.93l.372-4.272c.036-.412-.27-.775-.682-.812-.417-.03-.776.27-.812.683l-.383 4.4h-6.32l.37-4.27c.037-.413-.27-.776-.68-.813-.42-.03-.777.27-.813.683l-.382 4.4H3.782c-.414 0-.75.337-.75.75s.336.75.75.75H7.61l-.55 6.327H3c-.414 0-.75.336-.75.75s.336.75.75.75h3.93l-.372 4.272c-.036.412.27.775.682.812l.066.003c.385 0 .712-.295.746-.686l.383-4.4h6.32l-.37 4.27c-.036.413.27.776.682.813l.066.003c.385 0 .712-.295.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"></path></g></svg>
              <h2 class="font-extrabold text-black text-xl pl-4">Explore</h2>
            </div>
            <div class="inline-flex cursor-pointer my-1 px-4 py-2 items-center transition-all hover:text-blue-400 hover:bg-blue-100 rounded-full">
              <svg class="w-6 fill-current text-black" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path clip-rule="evenodd" d="M17.2 8.51762C17.2 10.301 17.6769 12.0519 18.5813 13.5889L19.5566 15.2464C19.7527 15.5798 19.5124 16 19.1256 16H14.4371C14.3808 16.3327 14.2872 16.6588 14.1575 16.9721C13.9313 17.518 13.5998 18.0141 13.182 18.432C12.7641 18.8498 12.268 19.1813 11.7221 19.4075C11.1761 19.6336 10.5909 19.75 10 19.75C9.40905 19.75 8.82389 19.6336 8.27792 19.4075C7.73196 19.1813 7.23588 18.8498 6.81802 18.432C6.40016 18.0141 6.06869 17.518 5.84254 16.9721C5.7128 16.6588 5.61918 16.3327 5.56294 16H0.874295C0.487558 16 0.247234 15.5798 0.443359 15.2464L1.41866 13.5889C2.32305 12.0519 2.79996 10.301 2.79996 8.51762V6.62069C2.79996 2.96418 6.02351 0 9.99996 0C13.9764 0 17.2 2.96418 17.2 6.62069V8.51762ZM4.29996 6.62069C4.29996 3.90858 6.731 1.5 9.99996 1.5C13.2689 1.5 15.7 3.90858 15.7 6.62069V8.51762C15.7 10.5685 16.2484 12.582 17.2885 14.3496L17.3769 14.5H2.62297L2.71146 14.3496C3.75151 12.582 4.29996 10.5685 4.29996 8.51762V6.62069ZM7.09526 16C7.1302 16.1353 7.17464 16.2683 7.22836 16.3981C7.37913 16.762 7.6001 17.0927 7.87868 17.3713C8.15726 17.6499 8.48797 17.8709 8.85195 18.0216C9.21593 18.1724 9.60603 18.25 10 18.25C10.394 18.25 10.7841 18.1724 11.1481 18.0216C11.512 17.8709 11.8427 17.6499 12.1213 17.3713C12.3999 17.0927 12.6209 16.762 12.7716 16.3981C12.8254 16.2683 12.8698 16.1353 12.9047 16H7.09526Z" />
              </svg>
              <h2 class="font-extrabold text-black text-xl pl-4">Notifications</h2>
            </div>
            <div class="inline-flex cursor-pointer my-1 px-4 py-2 items-center transition-all hover:text-blue-400 hover:bg-blue-100 rounded-full">
              <svg class="w-6 fill-current text-black" width="20" height="18" viewBox="0 0 20 18" fill="none" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2C0 0.89543 0.895431 0 2 0H18C19.1046 0 20 0.895431 20 2V16C20 17.1046 19.1046 18 18 18H2C0.895431 18 0 17.1046 0 16V2ZM2 1.5H18C18.2761 1.5 18.5 1.72386 18.5 2V2.93195L10.1387 8.50616C10.0547 8.56215 9.9453 8.56215 9.86133 8.50616L1.5 2.93195V2C1.5 1.72386 1.72386 1.5 2 1.5ZM1.5 4.73472V16C1.5 16.2761 1.72386 16.5 2 16.5H18C18.2761 16.5 18.5 16.2761 18.5 16V4.73472L10.9707 9.75424C10.3829 10.1461 9.6171 10.1461 9.02927 9.75424L1.5 4.73472Z" />
              </svg>
              <h2 class="font-extrabold text-black text-xl pl-4">Messages</h2>
            </div>
            <div class="inline-flex cursor-pointer my-1 px-4 py-2 items-center transition-all hover:text-blue-400 hover:bg-blue-100 rounded-full">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 fill-current text-black "><g><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path></g></svg>
              <h2 class="font-extrabold text-black text-xl pl-4">Profile</h2>
            </div>
            <div class="inline-flex cursor-pointer my-1 px-4 py-2 items-center transition-all hover:text-blue-400 hover:bg-blue-100 rounded-full">
              <svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 fill-current text-black "><g><circle cx="17" cy="12" r="1.5"></circle><circle cx="12" cy="12" r="1.5"></circle><circle cx="7" cy="12" r="1.5"></circle><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path></g></svg>
              <h2 class="font-extrabold text-black text-xl pl-4">More</h2>
            </div>
          </div>
        </div>
        <div class="
            lg:w-3/5
            xl:w-6/12
            lg:max-w-2xl
            max-w-xl
            w-full
            h-auto
            flex flex-col
            pb-16
            px-4
            border-b-2 border-gray-100 border-r border-l
          ">
          
          <div class="hidden xl:flex flex-col items-center  p-4">
              <div class="pl-2 flex items-start w-full">
                <div class="p-3 bg-gray-200 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input class="w-full h-10 ml-4 text-lg  outline-none" type="text" placeholder="What's happening?">
              </div>
              <div class="w-full flex justify-between items-center mt-6 pb-4">
                <div class="pl-20 flex">
                  <div class="p-2 hover:bg-blue-100 rounded-full transition-all flex items-center justify-center">
                    <a href="">
                      <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5"><g><path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"></path><circle cx="8.868" cy="8.309" r="1.542"></circle></g></svg>
                    </a>
                  </div>
                  <div class="p-2 hover:bg-blue-100 rounded-full transition-all flex items-center justify-center">
                    <a href="">
                      <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5"><g><path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"></path><path d="M20.5 2.02h-17c-1.24 0-2.25 1.007-2.25 2.247v15.507c0 1.238 1.01 2.246 2.25 2.246h17c1.24 0 2.25-1.008 2.25-2.246V4.267c0-1.24-1.01-2.247-2.25-2.247zm.75 17.754c0 .41-.336.746-.75.746h-17c-.414 0-.75-.336-.75-.746V4.267c0-.412.336-.747.75-.747h17c.414 0 .75.335.75.747v15.507z"></path></g></svg>
                    </a>
                  </div>
                  <div class="p-2 hover:bg-blue-100 rounded-full transition-all flex items-center justify-center">
                    <a href="">
                      <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5"><g><path d="M20.222 9.16h-1.334c.015-.09.028-.182.028-.277V6.57c0-.98-.797-1.777-1.778-1.777H3.5V3.358c0-.414-.336-.75-.75-.75s-.75.336-.75.75V20.83c0 .415.336.75.75.75s.75-.335.75-.75v-1.434h10.556c.98 0 1.778-.797 1.778-1.777v-2.313c0-.095-.014-.187-.028-.278h4.417c.98 0 1.778-.798 1.778-1.778v-2.31c0-.983-.797-1.78-1.778-1.78zM17.14 6.293c.152 0 .277.124.277.277v2.31c0 .154-.125.28-.278.28H3.5V6.29h13.64zm-2.807 9.014v2.312c0 .153-.125.277-.278.277H3.5v-2.868h10.556c.153 0 .277.126.277.28zM20.5 13.25c0 .153-.125.277-.278.277H3.5V10.66h16.722c.153 0 .278.124.278.277v2.313z"></path></g></svg>
                    </a>
                  </div>
                  <div class="p-2 hover:bg-blue-100 rounded-full transition-all flex items-center justify-center">
                    <a href="">
                      <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5"><g><path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path><path d="M12 17.115c-1.892 0-3.633-.95-4.656-2.544-.224-.348-.123-.81.226-1.035.348-.226.812-.124 1.036.226.747 1.162 2.016 1.855 3.395 1.855s2.648-.693 3.396-1.854c.224-.35.688-.45 1.036-.225.35.224.45.688.226 1.036-1.025 1.594-2.766 2.545-4.658 2.545z"></path><circle cx="14.738" cy="9.458" r="1.478"></circle><circle cx="9.262" cy="9.458" r="1.478"></circle></g></svg>
                    </a>
                  </div>
                  <div class="p-2 hover:bg-blue-100 rounded-full transition-all flex items-center justify-center">
                    <a href="">
                      <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5"><g><path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2z"></path><path d="M-37.9 18c-.1-.1-.1-.1-.1-.2.1 0 .1.1.1.2zM18 2.2h-1.3v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H7.7v-.3c0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8v.3H4.8c-1.4 0-2.5 1.1-2.5 2.5v13.1c0 1.4 1.1 2.5 2.5 2.5h2.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H4.8c-.6 0-1-.5-1-1V7.9c0-.3.4-.7 1-.7H18c.6 0 1 .4 1 .7v1.8c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-5c-.1-1.4-1.2-2.5-2.6-2.5zm1 3.7c-.3-.1-.7-.2-1-.2H4.8c-.4 0-.7.1-1 .2V4.7c0-.6.5-1 1-1h1.3v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5h7.5v.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.5H18c.6 0 1 .5 1 1v1.2z"></path><path d="M15.5 10.4c-3.4 0-6.2 2.8-6.2 6.2 0 3.4 2.8 6.2 6.2 6.2 3.4 0 6.2-2.8 6.2-6.2 0-3.4-2.8-6.2-6.2-6.2zm0 11c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7 4.7 2.1 4.7 4.7c0 2.5-2.1 4.7-4.7 4.7z"></path><path d="M18.9 18.7c-.1.2-.4.4-.6.4-.1 0-.3 0-.4-.1l-3.1-2v-3c0-.4.3-.8.8-.8.4 0 .8.3.8.8v2.2l2.4 1.5c.2.2.3.6.1 1z"></path></g></svg>
                    </a>
                  </div>
                </div>
                <div class="p-2 px-3 rounded-full bg-blue-400 hover:bg-blue-500 transition-all">
                  <a class="font-black text-white" href="">
                    Tweet
                  </a>
                </div>
              </div>
              
          </div>
          <div class="flex py-2 pt-4">
            <div class="w-1/5 lg:flex justify-center">
              <img class="w-12 h-12 rounded-full border border-gray-100" src="@/assets/twitter/elon.jpg" alt="" srcset="" />
            </div>
            <div class="w-full">
              <div class="flex items-center">
                <h2 class="text-black font-extrabold text-sm">Martha Craig</h2>
                <span class="pl-1">@craig_love · 12h</span>
              </div>
              <p class="text-xs leading-5"> UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou </p>
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
            <div class="w-1/5 lg:flex justify-center">
              <img class="w-12 h-12 ov rounded-full border border-gray-100" src="@/assets/twitter/kevin.jpg" alt="" srcset="" />
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
            <div class="w-1/5 lg:flex justify-center">
              <img class="w-12 h-12 ov rounded-full border border-gray-100" src="@/assets/twitter/monk.jpg" alt="" srcset="" />
            </div>
            <div class="w-full">
              <div class="flex items-center">
                <h2 class="text-black font-extrabold text-sm"> Tabitha Potter </h2>
                <span class="pl-1">@mis_potter ·14h</span>
              </div>
              <p class="text-xs leading-5"> Kobe’s passing is really sticking w/ me in a way I didn’t expect. He was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident. But the end can happen for anyone at any time, & I can’t help but think of anything else lately. </p>
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
            <div class="w-1/5 lg:flex justify-center">
              <img class="w-12 h-12 ov rounded-full border border-gray-100" src="@/assets/twitter/elon.jpg" alt="" srcset="" />
            </div>
            <div class="w-full">
              <div class="flex items-center">
                <h2 class="text-black font-extrabold text-sm">Martha Craig</h2>
                <span class="pl-1">@craig_love · 12h</span>
              </div>
              <p class="text-xs leading-5"> UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring? #TellMeAboutYou </p>
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
            <div class="w-1/5 lg:flex justify-center">
              <img class="w-12 h-12 ov rounded-full border border-gray-100" src="@/assets/twitter/kevin.jpg" alt="" srcset="" />
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
            <div class="w-1/5 lg:flex justify-center">
              <img class="w-12 h-12 ov rounded-full border border-gray-100" src="@/assets/twitter/monk.jpg" alt="" srcset="" />
            </div>
            <div class="w-full">
              <div class="flex items-center">
                <h2 class="text-black font-extrabold text-sm"> Tabitha Potter </h2>
                <span class="pl-1">@mis_potter ·14h</span>
              </div>
              <p class="text-xs leading-5"> Kobe’s passing is really sticking w/ me in a way I didn’t expect. He was an icon, the kind of person who wouldn’t die this way. My wife compared it to Princess Di’s accident. But the end can happen for anyone at any time, & I can’t help but think of anything else lately. </p>
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
        <div class="hidden lg:block lg:w-3/5 xl:w-4/12 px-5 py-3 pb-16">
          <div class="bg-gray-50 mb-4 rounded-lg">
            <div class="px-4 py-3 flex justify-between border-b border-gray-100">
              <h2 class="text-black font-black text-xl w-60">Trends for you</h2>
              <svg viewBox="0 0 24 24" aria-hidden="true" class="fill-blue w-6 h-6">
                <g>
                  <path d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z"></path>
                  <path d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z"></path>
                </g>
              </svg>
            </div>
            <!-- Journal List -->
            <div>
              <div class="px-4 py-3 relative border-b border-gray-100">
                <h4 class="text-gray-600 font-semibold text-xs"> Politics · Trending </h4>
                <h2 class="text-black font-extrabold text-md">BlueLivesMatter</h2>
                <p class="text-gray-600 font-semibold text-xs">5.443 Tweet</p>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 absolute top-2 right-4">
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
              <div class="px-4 py-3 relative border-b border-gray-100">
                <h4 class="text-gray-600 font-semibold text-xs"> Politics · Trending </h4>
                <h2 class="text-black font-extrabold text-md">BlueLivesMatter</h2>
                <p class="text-gray-600 font-semibold text-xs">5.443 Tweet</p>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 absolute top-2 right-4">
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
              <div class="px-4 py-3 relative border-b border-gray-100">
                <h4 class="text-gray-600 font-semibold text-xs"> Politics · Trending </h4>
                <h2 class="text-black font-extrabold text-md">BlueLivesMatter</h2>
                <p class="text-gray-600 font-semibold text-xs">5.443 Tweet</p>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 absolute top-2 right-4">
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
              <div class="px-4 py-3 relative border-b border-gray-100">
                <h4 class="text-gray-600 font-semibold text-xs"> Politics · Trending </h4>
                <h2 class="text-black font-extrabold text-md">BlueLivesMatter</h2>
                <p class="text-gray-600 font-semibold text-xs">5.443 Tweet</p>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 h-5 absolute top-2 right-4">
                  <g>
                    <circle cx="5" cy="12" r="2"></circle>
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                  </g>
                </svg>
              </div>
              <div class="px-4 py-3">
                <a class="font-medium text-blue-300" href="">Show more</a>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 rounded-lg">
            <div class="px-4 py-3 flex justify-between border-b border-gray-100">
              <h2 class="text-black font-black text-xl w-60">Who to follow</h2>
            </div>
            <!-- Journal List -->
            <div>
              <div class="
                  px-4
                  py-3
                  flex
                  justify-between
                  items-center
                  border-b border-gray-100
                ">
                <div class="flex">
                  <img class="w-12 h-12 rounded-full border mr-3 border-gray-100" src="@/assets/twitter/monk.jpg" alt="" />
                  <div>
                    <h4>Bla bla bla</h4>
                    <p>@blalaba</p>
                  </div>
                </div>
                <div>
                  <a class="
                      px-4
                      py-1
                      text-blue-400
                      font-extrabold
                      text-md
                      border border-blue-500
                      rounded-full
                    " href="">Follow</a>
                </div>
              </div>
              <div class="
                  px-4
                  py-3
                  flex
                  justify-between
                  items-center
                  border-b border-gray-100
                ">
                <div class="flex">
                  <img class="w-12 h-12 rounded-full border mr-3 border-gray-100" src="@/assets/twitter/monk.jpg" alt="" />
                  <div>
                    <h4>Bla bla bla</h4>
                    <p>@blalaba</p>
                  </div>
                </div>
                <div>
                  <a class="
                      px-4
                      py-1
                      text-blue-400
                      font-extrabold
                      text-md
                      border border-blue-500
                      rounded-full
                    " href="">Follow</a>
                </div>
              </div>
              <div class="
                  px-4
                  py-3
                  flex
                  justify-between
                  items-center
                  border-b border-gray-100
                ">
                <div class="flex">
                  <img class="w-12 h-12 rounded-full border mr-3 border-gray-100" src="@/assets/twitter/monk.jpg" alt="" />
                  <div>
                    <h4>Bla bla bla</h4>
                    <p>@blalaba</p>
                  </div>
                </div>
                <div>
                  <a class="
                      px-4
                      py-1
                      text-blue-400
                      font-extrabold
                      text-md
                      border border-blue-500
                      rounded-full
                    " href="">Follow</a>
                </div>
              </div>
              <div class="px-4 py-3">
                <a class="font-medium text-blue-300" href="">Show more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="
      xl:hidden
          lg:m-auto
          lg:max-w-5xl
          max-w-xl
          fixed
          items-center
          flex
          justify-between
          bottom-0
          w-full
          bg-white
          px-8
          lg:px-32
          py-4
        ">
        <img class="w-6" src="@/assets/twitter/home.svg" alt="" srcset="" />
        <img class="w-5" src="@/assets/twitter/search.svg" alt="" srcset="" />
        <img class="w-5" src="@/assets/twitter/notification.svg" alt="" srcset="" />
        <img class="w-5" src="@/assets/twitter/message.svg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style></style>