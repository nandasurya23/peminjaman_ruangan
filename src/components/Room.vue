<template>
  <div
    class="w-full h-screen relative bg-gradient-to-br from-gray-200 to-gray-100"
  >
    <div class="px-6 py-3">
      <!-- CARDS -->
      <div class="grid grid-cols-1 gap-2 mt-32 sm:grid-cols-3 md:grid-cols-4">
        <div v-for="room in rooms" class="w-full">
          <div class="p-2">
            <div
              class="bg-gradient-to-tl from-green-700 to-prime-3 w-full h-auto p-5 rounded-lg shadow-md hover:shadow-2xl"
            >
              <h1
                class="text-center font-Poppins text-white font-medium text-xl"
              >
                {{ room.name }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- NO READY -->
    <div class="px-6 py-3">
      <!-- CARDS -->
      <div class="grid grid-cols-1 gap-2 mt-5 sm:grid-cols-3 md:grid-cols-4">
        <div v-for="close in closes" class="w-full">
          <div class="p-2">
            <div
              class="bg-gradient-to-tl from-red-800 to-prime-4 w-full h-auto p-5 rounded-lg shadow-md hover:shadow-2xl"
            >
              <h1
                class="text-center font-Poppins text-white font-medium text-xl"
              >
                {{ close.name }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      rooms: [
        { id: "1", name: "R01" },
        { id: "2", name: "R02" },
        { id: "3", name: "R03" },
        { id: "4", name: "R04" },
        { id: "5", name: "R05" },
        { id: "6", name: "R06" },
        { id: "7", name: "Lab Data" },
        { id: "8", name: "R Kreatif" },
        { id: "9", name: "Aula" },
        { id: "10", name: "Lab RPL" },
        { id: "11", name: "Lab Bahasa" },
        { id: "11", name: "Auditorium" },
      ],
      closes: [
        { id: "1", name: "R Inkubator Bisnis" },
        { id: "2", name: "R Meeting" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
