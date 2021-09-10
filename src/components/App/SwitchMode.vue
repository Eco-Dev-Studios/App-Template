<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'

</script>

<template>
  <div>
    <button class="? flex p-2 items-center !outline-none" @click="toggleDark()">
      <heroicons-solid-sun v-if="isDark" class="h-8 fill-current text-gray-50 w-8" />
      <heroicons-solid-moon v-else class="h-8 fill-current text-gray-800 w-8" />
    </button>
  </div>
</template>
