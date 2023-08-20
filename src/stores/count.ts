import { defineStore } from "pinia";
import { ref } from "vue";

export const useCount = defineStore("useCount", () => {
  const count = ref(0);

  const str = ref("a");

  const increment = () => {
    count.value++;
    str.value += str.value;
  };
  const decrement = () => {
    count.value--;
  };

  return { count, str, increment, decrement };
});
