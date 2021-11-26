<template>
  <div class="flex w-full py-5 top-0 z-2 items-center fixed backdrop-filter backdrop-blur-md">
    <app-layout>
      <div class="grid gap-10 grid-cols-2 items-center justify-between">
        <div class="flex h-full items-center">
          <router-link to="/" class="mr-10 inline-block">
            <app-logo />
          </router-link>

          <nav class="-md:hidden">
            <router-link to="/" active-class="link-active" class="mr-1 link">
              Home
            </router-link>
            <router-link to="/about" active-class="link-active" class="link">
              About
            </router-link>
            <router-link to="/portfolio" active-class="link-active" class="mr-1 link">
              Portfolio
            </router-link>
            <router-link to="/contact" active-class="link-active" class="mr-1 link">
              Contact
            </router-link>
            <router-link to="/404" active-class="link-active" class="mr-1 link">
              404
            </router-link>
          </nav>
        </div>
        <div class="flex h-full items-center justify-end -md:hidden">
          <router-link to="/auth/signin/" class="mr-1 link">
            Sign In
          </router-link>
          <router-link to="/auth/signup/" class="link">
            Sign Up
          </router-link>
          <app-switch-mode class="ml-10" />
        </div>
        <div class="h-full items-center justify-end hidden -md:flex">
          <app-switch-mode class="ml-10 -md:ml-2" />
          <heroicons-solid-menu class="h-6 fill-current text-gray-800 w-6 dark:text-gray-50" />
        </div>
      </div>
    </app-layout>
  </div>
</template>
