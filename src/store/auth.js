import firebase from "firebase";
export default {
  state: {
    user: {},
  },
  getters: {},
  mutations: {},
  actions: {
    async register({ commit }, { email, name, password }) {
      console.log(commit);
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = await firebase.auth().currentUser;
      if (user) {
        await firebase.database().ref(`/user/${user.uid}/info`).set({
          uid: user.uid,
          name,
          email,
        });
      }
    },
  },
};
