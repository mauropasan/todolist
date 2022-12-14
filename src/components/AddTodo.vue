<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            newTodo: '',
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo) {
                store.addTodoInStore(this.newTodo)
            }
        }
    }
}
</script>

<template>
    <form @submit.prevent="addTodo">
        <p>Añadir una nueva tarea: </p>
        <input type="text" v-model="newTodo">
        <input type="submit" value="Añadir tarea">
    </form>
</template>