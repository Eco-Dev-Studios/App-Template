<template>
  <div class="flex h-screen w-full items-center justify-center">
    <div class="w-1/2">
      <h1 class="font-bold text-center text-xl w-full">
        Home
      </h1>
      <div class="flex flex-col w-full ">
        <button class="rounded-sm font-bold bg-gray-800 mt-4 text-lg w-full py-2 px-12 text-gray-50 dark:bg-gray-50 dark:text-gray-800" @click="addItem">
          Add
        </button>
        <button class="rounded-sm font-bold bg-gray-800 mt-4 text-lg w-full py-2 px-12 text-gray-50 dark:bg-gray-50 dark:text-gray-800" @click="reset">
          Reset
        </button>
      </div>
      <h1 class="font-bold mt-8 text-center w-full text-4xl">
        {{ cart }}
      </h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../../stores/todo'

const todo = useTodoStore()
const { cart } = storeToRefs(todo)

const { addItem } = todo
const reset = () => todo.$reset()
</script>
