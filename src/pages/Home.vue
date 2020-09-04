<template>
  <div>
    <div>Home</div>
    <Card :title="title" :description="description" :img="img" />
    <Loader />
  </div>
</template>

<script>
import Card from "@/components/Card";
import Loader from "@/components/Loader";
export default {
  name: "Home",
  data() {
    return {
      title: "lol",
      description: "lol kek chebureck",
      img: "https://picsum.photos/id/237/200/300",
    };
  },
  components: { Loader, Card },
};
</script>
