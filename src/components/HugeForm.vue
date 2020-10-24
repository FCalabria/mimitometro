<template>
  <form>
    <div>
      <input type="number" name="totalKm" id="totalKm" min="0" step="50" :value="totalKm" @input="onInputNumber"/>
      <label for="totalKm">Km totales</label>
    </div>
    <div>
      <input type="number" name="nightKm" id="nightKm" min="0" step="10" :value="nightKm" @input="onInputNumber"/>
      <label for="nightKm">Km nocturnos</label>
    </div>
    <div>
      <input type="number" name="dangerousKm" id="dangerousKm" min="0" step="10" :value="dangerousKm" @input="onInputNumber"/>
      <label for="dangerousKm">Plus de peligrosidad (km)</label>
    </div>
    <div>
      <input type="number" name="jamKm" id="jamKm" min="0" :value="jamKm" @input="onInputNumber"/>
      <label for="jamKm">Atascos (km)</label>
    </div>
    <div>
      <input type="number" name="borders" id="borders" min="0" :value="borders" @input="onInputNumber"/>
      <label for="borders">Fronteras</label>
    </div>
    <div>
      <input type="checkbox" name="camper" id="camper" :value="camper" @change="$emit('update:camper', $event.target.checked)" class="w-5 h-5"/>
      <label for="camper" class="ml-2">Camper</label>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HugeForm',
  props: {
    totalKm: Number,
    nightKm: Number,
    dangerousKm: Number,
    jamKm: Number,
    borders: Number,
    camper: Boolean,
  },
  methods: {
    onInputNumber (event: InputEvent) {
      const target = event.target as HTMLInputElement
      this.$emit(`update:${target.name}`, target.valueAsNumber)
    },
  }
})

</script>

<style scoped>
form>div:not(:last-of-type) {
  @apply mb-3 flex flex-col-reverse;
}
input {
  @apply bg-gray-200 p-1 border-b-2 border-teal-200 outline-none;
}
input:focus-visible {
  @apply outline-orange;
}
@screen md {
  form>div:not(:last-of-type) {
    @apply flex-row;
  }
  label {
    @apply ml-2 self-center;
  }
}
</style>
