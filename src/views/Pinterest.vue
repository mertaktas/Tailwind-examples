<template lang="html">
    <div class="">
        <TopNav class="max-w-6xl mx-auto" />
        <div class="box-border max-w-6xl mx-auto masonry-2 sm:masonry-3 md:masonry-3 lg:masonry-4 xl:masonry-5 before:box-inherit after:box-inherit">
            <div v-for="(card, index) in cards" :key="index" class="px-5 py-2 rounded-lg break-inside mx-auto w-full md:w-60">
                <Card class="max-w-lg mx-auto" :src="`${card.src}`" :board="`${card.recommended}`" />
                <div class="text-sm leading-tight pt-2 max-w-md mx-auto">
                    <p class="font-bold"> {{ card.title }} </p>
                    <p> {{ card.user }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopNav from '@/components/pinterest/TopNav.vue'
import Card from '@/components/pinterest/Card.vue'
export default {
    name: 'Pinterest',
    components: {
        TopNav,
        Card
    },
    data() {
      return {
        cards: [
          {
            src: 'https://i.pinimg.com/236x/8f/50/81/8f5081c6727b98cdf8957e7ddf75b528.jpg',
            title: 'Title 1',
            user: 'User 1',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/8f/7b/d6/8f7bd6726a40aa0496a0cd46c75e2259.jpg',
            title: 'Title 2',
            user: 'User 2',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/cf/e9/ce/cfe9ceb34630ac35daa732e012dc419a.jpg',
            title: 'Title 3',
            user: 'User 3',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/b0/bf/03/b0bf035163ec21afa73863c4cef36d00.jpg',
            title: 'Title 4',
            user: 'User 4',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/69/1a/cc/691acca09c9249576ba927db4b012a2a.jpg',
            title: 'Title 5',
            user: 'User 5',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/e3/70/9c/e3709c5b14a6bb34a8ec132045928751.jpg',
            title: 'Title 6',
            user: 'User 6',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/9a/ac/82/9aac823976e869efc800944e099aa43b.jpg',
            title: 'Title 7',
            user: 'User 7',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/2f/98/98/2f989840e731f7c67846d8dbd57cbb37.jpg',
            title: 'Title 8',
            user: 'User 8',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/7d/66/dc/7d66dc136c2a87dfc43047f3c6939902.jpg',
            title: 'Title 9',
            user: 'User 9',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/e6/a6/14/e6a614ab9f91c15fb8324dbf268b6284.jpg',
            title: 'Title 10',
            user: 'User 10',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/37/2b/36/372b367b549d2566d72ba768c80d2ade.jpg',
            title: 'Title 11',
            user: 'User 11',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/4f/e6/cd/4fe6cda3a4923e910a597791af734693.jpg',
            title: 'Title 12',
            user: 'User 12',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/c7/89/42/c789425fa90605c30448b27b19b30048.jpg',
            title: 'Title 13',
            user: 'User 13',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/48/72/0f/48720f160bbf7ec9db94e0e3eb70e306.jpg',
            title: 'Title 14',
            user: 'User 14',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/7e/ae/8e/7eae8ef67efd1b6975a47ba70f9ac292.jpg',
            title: 'Title 15',
            user: 'User 15',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/16/85/39/1685391205a95f861489f17db4a5f0cd.jpg',
            title: 'Title 16',
            user: 'User 16',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/a8/53/fc/a853fc234c579c2d7ae37b0df748f88b.jpg',
            title: 'Title 17',
            user: 'User 17',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/9b/32/73/9b3273e17d7e62826a7bff4413947c6b.jpg',
            title: 'Title 18',
            user: 'User 18',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/44/7a/db/447adb95d940615e7a20087eab102f04.jpg',
            title: 'Title 19',
            user: 'User 19',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/95/0e/aa/950eaa6fd8e777f817633362c00270fd.jpg',
            title: 'Title 20',
            user: 'User 20',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/a9/94/01/a9940104ff3ebbd54bf14c2d1b25b1cd.jpg',
            title: 'Title 21',
            user: 'User 21',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/42/13/19/4213194513664375e1b90576b7d874f1.jpg',
            title: 'Title 22',
            user: 'User 22',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/f9/c1/50/f9c150b1af83daf931cd95faa1a73ebb.jpg',
            title: 'Title 13',
            user: 'User 13',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/f1/a0/40/f1a04014e68973bbf2228340a6c5d855.jpg',
            title: 'Title 14',
            user: 'User 14',
            recommended: 'Travel'
          },
          {
            src: 'https://i.pinimg.com/236x/2e/5a/ee/2e5aeebaf755805c356f0ddb89a5044e.jpg',
            title: 'Title 15',
            user: 'User 15',
            recommended: 'Travel'
          },
        ]
      }
  }
}
</script>

<style>

</style>