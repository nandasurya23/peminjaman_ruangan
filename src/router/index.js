import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import Room from "../components/Room.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/Room",
      name: "room",
      component: Room,
    },
  ],
});

export default router;
