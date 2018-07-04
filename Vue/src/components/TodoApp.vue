<template>
  <div>
    <h1>Todo app</h1>
      <AddTodo v-on:addTodo="addTodo" />
    <ul>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import AddTodo from './AddTodo.vue';
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoApp',
  components: {
    AddTodo,
    TodoItem,
  },
  data() {
    return {
      todos: [{ id: 1, text: 'Présenter Vue', done: false }],
    };
  },
  computed: {
    maxId: function() {
      return Math.max(...this.todos.map(td => td.id));
    },
  },
  methods: {
    addTodo: function(todo) {
      this.todos.push({ id: this.maxId + 1, ...todo });
    },
  },
};
</script>
