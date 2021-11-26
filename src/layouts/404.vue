<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <app-header />
  <router-view />
  <div class="flex items-center justify-center">
    <button
      class="rounded-sm font-bold bg-gray-800 mt-4 text-lg py-2 px-12 text-gray-50 dark:bg-gray-50 dark:text-gray-800"
      @click="router.back()"
    >
      Back
    </button>
  </div>
</template>
