import VueRouter from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("@/pages/Home.vue") },
  {
    path: "/add-card",
    name: "AddCard",
    component: () => import("@/pages/AddCard.vue"),
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("@/pages/SignIn.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("@/pages/SignUp.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
