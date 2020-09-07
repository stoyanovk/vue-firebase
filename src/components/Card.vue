<template>
  <div class="card" style="width: 18rem;">
    <img :src="img" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    img: { type: String, default: "" },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
  },
};
</script>
