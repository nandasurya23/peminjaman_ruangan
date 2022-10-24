<template>
  <nav class="w-56 bg-gradient-to-b from-prime-1 to-prime-2 h-full flex-none">
    <div class="p-5">
      <img src="../../src/assets/img/prime.svg" alt="LOgo" class="h-16 mt-5" />
    </div>
    <div class="mx-2">
      <button
        v-for="page in pages"
        @click="setID = page.id"
        :class="`w-full focus:outline-none text-sm font-Poppins font-medium rounded px-3 py-2 flex items-center justify-start ${
          setID === page.id ? 'bg-prime-1 text-white' : 'text-gray-400'
        }`"
      >
        <span class="material-symbols-outlined mr-3"> {{ page.icon }} </span>
        <p>{{ page.name }}</p>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      pages: [
        { id: "home", name: "Home", icon: "home" },
        { id: "room", name: "Rooms", icon: "meeting_room" },
        { id: "tools", name: "Tools", icon: "Home_Repair_Service" },
        { id: "search", name: "Search", icon: "search" },
      ],
      setID: "home",
    };
  },
};
</script>

<style lang="scss" scoped></style>
