<script>
// import { RouterView } from "vue-router";
// import Nav from "./components/Nav.vue";
// import Home from "./components/Home.vue";
</script>

<template>
  <nav
    class="p-5 bg-gradient-to-r from-prime-1 to-prime-2 shadow md:flex md:items-center md:justify-between absolute z-50 w-full"
  >
    <div class="cursor-pointer">
      <img
        src="../../src/assets/img/prime.svg"
        alt="LOgo"
        class="h-16 inline"
      />
    </div>
    <div
      class="md:flex md:items-center z-[-1] md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7"
    >
      <router-link
        to="/"
        class="text-xl text-white font-Poppins font-medium hover:text-prime-2 duration-500 mx-4 my-6 md:0"
        >Home</router-link
      >
      <router-link
        to="/room"
        class="text-xl text-white font-Poppins font-medium hover:text-prime-2 duration-500 mx-4 my-6 md:0"
        >Rooms</router-link
      >
      <router-link
        to="/room"
        class="text-xl text-white font-Poppins font-medium hover:text-prime-2 duration-500 mx-4 my-6 md:0"
        >Tools</router-link
      >
      <router-link
        to="/room"
        class="text-xl text-white font-Poppins font-medium hover:text-prime-2 duration-500 mx-4 my-6 md:0"
        >Contact</router-link
      >
    </div>

    <button
      class="bg-prime-1 text-white font-Poppins duration-500 px-6 py-2 mx-4 hover:bg-prime-4 rounded-full"
    >
      Form Peminjaman
    </button>
  </nav>
  <RouterView />
</template>

<style scoped></style>
