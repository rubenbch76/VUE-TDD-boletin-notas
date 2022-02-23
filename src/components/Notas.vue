<template>
  <div id="componente">
    <h1>BOLETÍN DE NOTAS</h1>

    <label for="name"></label>Nombre del alumno
    <input
      type="text"
      v-model="name"
      name="name"
      id="name"
      placeholder="Introduzca nombre del alumno"
    />

    <h1>INTRODUCCIÓN DE DATOS</h1>

    <label for="course"></label>Asignatura
    <input
      type="text"
      v-model="course"
      name="course"
      id="course"
      placeholder="Introduzca asignatura"
    />
    <p></p>
    <label for="nota"></label>Nota
    <input
      type="number"
      v-model="nota"
      name="nota"
      id="nota"
      placeholder="Indique su nota"
    />

    <button @click="calificacion">Enviar</button>

    <h1>Resultado académico</h1>

    <div id="res">
      <p>Alumno: {{ name }}</p>
      <ul>
        <li v-for="(result, index) in finalMessage" :key="index">
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
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
