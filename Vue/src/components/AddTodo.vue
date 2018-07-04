<template>
  <form v-on:submit.prevent="addTodo">
    <label for="todo">Todo: </label>
    <input name="todo" type="text" v-model="text" />
    <button type="sumbit">Add</button>
  </form>
</template>

<script>
export default {
  name: 'AddTodo',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    addTodo: function() {
      const todo = {
        text: this.text,
        done: false,
      };
      this.$emit('addTodo', todo);
      this.text = '';
    },
  },
};
</script>
