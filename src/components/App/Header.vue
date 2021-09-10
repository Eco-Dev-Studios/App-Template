<template>
  <div class="flex w-full py-5 top-0 z-2 items-center fixed backdrop-filter backdrop-blur-md">
    <app-layout>
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <app-logo class="mr-10" />
          <router-link to="/" class="mr-1 link">
            Home
          </router-link>
          <router-link to="/" class="link">
            About
          </router-link>
        </div>
        <div class="flex items-center">
          <router-link to="/auth/signin/" class="mr-1 link">
            Sign In
          </router-link>
          <router-link to="/auth/signup/" class="link">
            Sign Up
          </router-link>

          <!-- <app-switch-mode /> -->
        </div>
      </div>
    </app-layout>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.link{
  @apply font-semibold text-lg py-1 px-4 text-gray-800 hover:text-gray-900;
}

</style>
