<script>
import { store } from '../store.js'

export default {
    data() {

    },
    methods: {
        delTodos() {
            if (confirm('¿Quieres borrar todas las tareas?')) {
                store.delTodosFromStore()
            }
        }
    }
}
</script>

<template>
    <button @click="delTodos">Borrar todas las tareas</button>
</template>