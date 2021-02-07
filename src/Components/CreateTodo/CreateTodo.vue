<template>
  <input type="text" v-model="todo" />
  <button @click="addToDo">Add todo</button>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    addToDo: function () {
      this.$emit("create-to-do", this.todo);
      this.todo = "";
    },
  },
};
</script>