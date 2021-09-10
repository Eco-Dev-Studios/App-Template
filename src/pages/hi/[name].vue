<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const props = defineProps<{ name: string }>()
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewName(props.name)
})
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      <!-- {{ t('intro.hi', { name: props.name }) }} -->
      {{ props.name }}
    </p>

    <p class="text-sm opacity-50">
      Dynamic Route
    </p>

    <template v-if="user.otherNames.length">
      <p class="mt-4 text-sm">
        <span class="opacity-75">Also know as:</span>
        <ul>
          <li v-for="name in user.otherNames" :key="name">
            <router-link :to="`/hi/${name}`" replace>
              {{ name }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        class="m-3 mt-6 text-sm btn"
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
</template>
