<template>
  <div>
    <h1>Sign Un</h1>
    <div class="container">
      <div class="row">
        <div class="col-4 offset-4">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                v-model="email"
                type="email"
                class="form-control valid"
                id="email"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                id="name"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const { email, name, password } = this;
        await this.$store.dispatch("register", { email, name, password });
        this.$router.push("/sign-in");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
