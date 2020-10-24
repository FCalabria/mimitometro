<template>
  <table>
    <thead>
      <tr>
        <th class="text-left">Mimo</th>
        <th>Valor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Caricia genérica</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Acariciar pelito</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Beso</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Masaje</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Achuchón</td>
        <td>2</td>
      </tr>
      <tr>
        <td>Mordisco en la oreja</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Amenaza de mordisco (cada 24h)</td>
        <td>50</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Equivalencies",
});
</script>

<style scoped>
td, th {
  @apply p-1;
}
td:nth-child(2) {
  @apply text-right;
}
tbody tr:nth-child(odd) {
  @apply bg-gray-400;
}
</style>