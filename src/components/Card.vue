<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="img" :alt="title" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ title }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
    </div>
    <!-- <div class="px-6 pt-4 pb-2"> -->
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
