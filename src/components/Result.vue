<template>
  <div class="text-center bg-teal-300 p-2 rounded shadow">
    <span class="text-gray-800">A deber:</span>
    <br>
    <span class="text-3xl font-bold">{{ cuddles }} mimitos</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Result',
  props: {
    cuddles: {
      required: true,
      type: Number,
    },
  },
})
</script>
