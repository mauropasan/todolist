<script>
import { store } from '../store.js'
import Todo from './Todo.vue'

export default {
    components: {
        Todo,
    },
    data() {
        return {
            todos: store.state.todos
        }
    },
    methods: {
        delTodo(id) {
            store.delTodoFromStore(id)
        }
    }
}
</script>

<template>
    <template v-if="todos.length">
    <p>Total de tareas: {{ todos.length }}</p>
        <ul>
            <todo v-for="todo in todos" :todo="todo" @del="delTodo"></todo>
        </ul>
    </template>
    <p v-else>No hay tareas para mostrar.</p>
</template>