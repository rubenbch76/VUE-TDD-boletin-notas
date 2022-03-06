<template>
  <v-app>
    <v-card class="mx-auto" width="256" tile>
      <p class="font-weight-bold">Introducción de datos</p>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="20"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="course"
          :counter="20"
          :rules="courseRules"
          label="Course"
          required
        ></v-text-field>
        <v-text-field
          v-model="nota"
          :counter="20"
          :rules="notaRules"
          label="nota"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="calificacion"
        >
          Aceptar
        </v-btn>
      </v-form>
    </v-card>

    <v-card class="mx-auto mt-10" width="256" tile>
      <p class="font-weight-bold">Notas finales: {{ name }}</p>

      <div id="res">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              v-for="(result, index) in finalMessage"
              :key="index"
            >
              {{ result }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Notas",
  data: () => ({
    nota: "",
    course: "",
    name: "",
    message: "",
    finalMessage: [],
    notaRules: [
      (value) => !!value || "Campo requerido.",
      (value) => (value || "").length < 3 || "Máximo 2 dígitos",
      (value) => {
        const pattern = /^\d+$/;
        return pattern.test(value) || "Nota incorrecta. Solo dígitos";
      },
    ],
  }),
  methods: {
    calificacion() {
      let nota = this.nota;

      if (nota < 3 && nota >= 0) {
        this.message = "Muy deficiente";
      }
      if (nota >= 3 && nota < 5) {
        this.message = "Inuficiente";
      }
      if (nota < 6 && nota >= 5) {
        this.message = "Suficiente";
      }
      if (nota >= 6 && nota < 7) {
        this.message = "Bien";
      }
      if (nota >= 7 && nota < 9) {
        this.message = "Notable";
      }
      if (nota >= 9) {
        this.message = "Sobresaliente";
      }

      this.finalMessage.push(this.course + " - " + this.message);
    },
  },
};
</script>
