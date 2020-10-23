<template>
  <div>A deber: {{ cuddles }} mimitos</div>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Result",
  props: {
    cuddles: {
      required: true,
      type: Number,
    },
  },
});
</script>