<template>
  <div class="home">
    <Notas />
  </div>
</template>

<script>
// @ is an alias to /src
import Notas from "@/components/Notas.vue";

export default {
  name: "Home",
  components: {
    Notas,
  },
};
</script>
