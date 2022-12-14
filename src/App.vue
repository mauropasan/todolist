<script>
import AppTitle from './components/AppTitle.vue'
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo.vue'
import DelTodos from './components/DelTodos.vue'

import { store } from './store'

export default {
    components: {
        AppTitle,
        TodoList,
        AddTodo,
        DelTodos,
    },
    mounted() {
      store.loadTodos()
    }
}
</script>

<template>
  <app-title title="Cosas a hacer este año:"></app-title>
  <todo-list></todo-list>
  <add-todo></add-todo>
  <del-todos></del-todos>
</template>