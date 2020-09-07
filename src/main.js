import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import store from "./store";
import router from "./router";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(VueRouter);

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_DOMAIN,
  databaseURL: process.env.VUE_APP_DB,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_BUCKET,
  messagingSenderId: process.env.VUE_APP_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
});

new Vue({
  router,
  store,
  mounted() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // this.$store.dispatch("setUser", { email: user.email, uid: user.uid });
        // this.$store.dispatch("fetchInfo", user.uid);
        console.log(user.providerData[0]);
      }
    });
  },
  render: (h) => h(App),
}).$mount("#app");
