import axios from 'axios'
import { reactive } from 'vue'


const SERVER = 'http://localhost:3000'

let id = 0

export const store = {
    debug: true,
    state: reactive({
        todos: [],
    }),
    async addTodoInStore(newTitle) {
        const response = await axios.post(`${SERVER}/todos`, {
            title: newTitle,
            done: false
        })
        this.state.todos.push(response.data)
    },
    async delTodosFromStore() {
        try {
            this.state.todos.forEach(async (todo) => {
                await axios.delete(`${SERVER}/todos/${todo.id}`)
                this.state.todos.splice(this.state.todos.findIndex((todo => id === todo.id)), 1)
            })
        } catch(err) {
            alert(err)
        }
    },
    async delTodoFromStore(id) {
        try {
            const response = await axios.delete(`${SERVER}/todos/${id}`)
            this.state.todos.splice(this.state.todos.findIndex(todo => id === todo.id), 1)
        } catch(err) {
            alert(err)
        }
    },
    async loadTodos() {
        try {
            const response = await axios.get(`${SERVER}/todos`)
            response.data.forEach(todo => this.state.todos.push(todo))
        } catch (err) {
            alert(err)
        }
    },
    async changeDone(id) {
        try {
            let todo = this.state.todos.find(todo => todo.id === id)
            const response = await axios.patch(`${SERVER}/todos/${id}`, { done: !todo.done })
            todo.done = response.data.done
        } catch (err) {
            alert(err)
        }
    }
}