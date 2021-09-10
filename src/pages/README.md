## File-based Routing

Routes will be auto-generated for Vue files in this dir with the same file structure.
Check out [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.

### Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having

```ts
import { isDark } from '../../../../logic'
```

now, you can use

```ts
import { isDark } from '~/logic'
```




<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name) router.push(`/hi/${encodeURIComponent(name)}`)
}
</script>

<template>
  <app-layout>
    <div class="h-auto">
      <p class="text-4xl">
        <carbon-campsite class="inline-block"></carbon-campsite>
      </p>
      <p>
        <a
          rel="noreferrer"
          href="https://github.com/antfu/vitesse"
          target="_blank"
        >Vitesse</a>
      </p>
      <p>Vitesse Template</p>
      <div class="py-4"></div>
      <input
        id="input"
        v-model="name"
        placeholder="Whats your name"
        aria-label="Whats your name"
        type="text"
        autocomplete="false"
        p="x-4 y-2"
        w="250px"
        text="center"
        bg="transparent"
        border="~ rounded gray-200 dark:gray-700"
        outline="none active:none"
        @keydown.enter="go"
      /><label class="hidden" for="input">Whats your name?</label>
      <div>
        <button class="m-3 text-sm btn" :disabled="!name" @click="go">
          Go
        </button>
      </div>
    </div>
  </app-layout>
</template>
