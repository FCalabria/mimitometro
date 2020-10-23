<template>
  <h1>Mimitómetro</h1>
  <HugeForm 
    v-model:totalKm="totalKm"
    v-model:borders="borders"
    v-model:camper="camper"
    v-model:dangerousKm="dangerousKm"
    v-model:jamKm="jamKm"
    v-model:nightKm="nightKm"
  />
  <Result :cuddles="cuddles"/>
  <Equivalencies />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HugeForm from './components/HugeForm.vue'
import Result from './components/Result.vue'
import Equivalencies from './components/Equivalencies.vue'

const initialData = {
  totalKm: 0,
  nightKm: 0,
  dangerousKm: 0,
  jamKm: 0,
  borders: 0,
  camper: false,
}

export default defineComponent({
  name: 'App',
  components: {
    HugeForm,
    Result,
    Equivalencies,
  },
  data() { return initialData },
  computed: {
    cuddles () {
      const baseCuddles = this.totalKm / 10 || 0
      const nightCuddles = this.nightKm / 10 || 0
      const dangerCuddles = this.dangerousKm / 10 || 0
      const borderCuddles = this.borders * 15 || 0
      const jamCuddles = this.jamKm || 0
      const totalCuddles = baseCuddles + nightCuddles + dangerCuddles + borderCuddles + jamCuddles
      return this.camper ? 2 * totalCuddles : totalCuddles
    }
  }
})

</script>

<style>
</style>
