<script setup>
import {ref, computed, watch} from 'vue'
import TaskCard from "./TaskCard.vue"
import KanbanColumn from './KanbanColumn.vue'
import { useKanbanStore } from '../stores/kanban'

const store = useKanbanStore()

const count = ref(0)

function increment() {
    count.value++
}

const taskText = ref("")

watch(() => store.columns, (columns) => {
  localStorage.setItem('kanban', JSON.stringify(columns))
}, { deep: true })

function addTask(){
    if (!taskText.value.trim()) return

    store.addTask(taskText.value.trim())

    taskText.value=""
}

</script>

<template>
   <h1>Kanban Board</h1>

   <h2>Total Tasks: {{ store.totalTasks }}</h2>
    <div class = "task-form">
        <input v-model="taskText" placeholder="Enter task" @keyup.enter="addTask"/>
        <button @click="addTask">Add Task</button>
    </div>
    <div class="board">
    <KanbanColumn
      v-for="column in store.columns"
      :key="column.id"
      :column="column"
      @delete-task="store.deleteTask"
      @move-right="store.moveTaskRight"/>  

</div>

</template>

<style scoped>
h1 {
  color: blue;
}

.board {
  display: flex;
  gap: 20px;
}

.column {
  width: 250px;
  min-height: 400px;
  padding: 16px;
  background: #f4f4f4; 
  border-radius: 8px;
}

.task {
  background: white;
  padding: 12px;
  margin-top: 10px;
  border-radius: 6px;
}


</style>
``
