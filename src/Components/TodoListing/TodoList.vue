<template>
  <div>Today on the List</div>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }}
    </li>
  </ul>
</template>


<script>
export default {
  props: ["todos"],
};
</script>