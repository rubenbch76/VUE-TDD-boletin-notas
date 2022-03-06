<template>
  <!-- <hello-world /> -->
  <v-app>
    <v-main>
      <Notas />
    </v-main>
  </v-app>
</template>

<script>
/* import HelloWorld from "../components/HelloWorld"; */
import Notas from "../components/Notas";

export default {
  name: "Home",

  components: {
    /* HelloWorld, */
    Notas,
  },
};
</script>
