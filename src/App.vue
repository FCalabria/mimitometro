<template>
  <h1 class="text-xl text-orange-900 text-center mb-4 font-semibold">Mimitómetro</h1>
  <div class="grid grid-cols-3 max-w-lg md:max-w-4xl m-auto">
    <HugeForm 
      v-model:totalKm="totalKm"
      v-model:borders="borders"
      v-model:camper="camper"
      v-model:dangerousKm="dangerousKm"
      v-model:jamKm="jamKm"
      v-model:nightKm="nightKm"
      class="col-span-3 md:col-span-2 mb-4"
    />
    <Equivalencies class="col-span-3 md:col-span-1 mb-4"/>
    <Result class="col-span-3" :cuddles="cuddles"/>
  </div>
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
      const baseCuddles = (this as any).totalKm / 10 || 0
      const nightCuddles = (this as any).nightKm / 10 || 0
      const dangerCuddles = (this as any).dangerousKm / 10 || 0
      const borderCuddles = (this as any).borders * 15 || 0
      const jamCuddles = (this as any).jamKm || 0
      const totalCuddles = baseCuddles + nightCuddles + dangerCuddles + borderCuddles + jamCuddles
      return (this as any).camper ? 2 * totalCuddles : totalCuddles
    }
  }
})

</script>
