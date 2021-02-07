
<template>
  <todo-list :todos="todos"></todo-list>
  <create-todo @createToDo="addTodo"></create-todo>
</template>

<script>
import CreateTodo from "./Components/CreateTodo/CreateTodo.vue";

/**
 *  Component Defination
 */

export default {
  /**
   * Register local components
   */

  components: { CreateTodo },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Learn Vue JS",
        },
        {
          id: 2,
          title: "Learn Vue JS routing",
        },
        {
          id: 3,
          title: "Learn Vue JS State Management ",
        },
      ],
    };
  },
  methods: {
    addTodo: function (todo) {
      this.todos = [...this.todos, { id: this.todos.length + 1, title: todo }];
    },
  },
};
</script>