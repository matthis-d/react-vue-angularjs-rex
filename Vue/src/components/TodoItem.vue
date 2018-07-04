<template>
  <li>
    <input type="checkbox" v-model="todo.done"/>
    <span :class="{ done: todo.done }">{{todo.text}}</span>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
};
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
}

.done {
  text-decoration: line-through;
}
</style>
