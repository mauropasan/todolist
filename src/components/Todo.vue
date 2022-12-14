<script>
import { store } from '../store'

export default {
    props: {
        todo: Object,
    },
    data() {

    },
    methods: {
        del() {
            store.delTodoFromStore(this.todo.id)
        },
        changeDone() {
            store.changeDone(this.todo.id)
        }
    },
}
</script>

<template>
    <li @dblclick="del">
        <input type="checkbox" :checked="todo.done" @change="changeDone">
        <span v-if="!todo.done">{{ todo.title }}</span>
        <span v-else><del>{{ todo.title }}</del></span>
    </li>
</template>