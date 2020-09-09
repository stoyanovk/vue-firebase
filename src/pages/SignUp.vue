<template>
  <div>
    <div class="container mt-4">
      <h1>Sign Un</h1>
      <div class="row">
        <div class="col-4 offset-4">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                v-model="formState.email"
                type="email"
                class="form-control"
                id="email"
                aria-describedby="emailHelp"
                @blur="handleBlur"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                v-model="formState.password"
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
// import { isEmail, isEmpty } from "validator";

export default {
  name: "SignUp",
  data() {
    return {
      formState: { email: "", password: "" },
      errors: [],
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const {
          formState: { email, password },
        } = this;
        console.log(email, password);
        await this.$store.dispatch("register", { email, password });
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
    handleBlur(e) {
      console.log(e);
    },
  },
};
</script>
