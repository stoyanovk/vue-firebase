<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link active" to="/">Home </router-link>
        <router-link class="nav-link" to="/add-card">add card </router-link>
        <router-link class="nav-link" to="/sign-in">sign in </router-link>
        <router-link class="nav-link" to="/sign-up">sign up </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>
