import firebase from "firebase";
export default {
  state: {
    user: {},
  },
  getters: {},
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async register({ commit }, { email, password }) {
      console.log(commit);
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = await firebase.auth().currentUser;
      commit("setUser", user);
    },
  },
};
