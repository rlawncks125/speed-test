<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCount } from "@/stores/count";

const { count } = storeToRefs(useCount());
const { increment, decrement } = useCount();
</script>

<template>
  <div>count</div>
  <p>카운트 : {{ count }}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<style lang="scss" scoped>
button {
  @apply bg-blue-400 mx-4 p-5;
}
</style>
