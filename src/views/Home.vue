<template>
  <div class="flex flex-col justify-center items-center w-full">
    <router-link to="pinterest">Pinterest</router-link>
    <ProfileCard />
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
export default {
  components: {
    ProfileCard,
  }

}
</script>

<style>

</style>