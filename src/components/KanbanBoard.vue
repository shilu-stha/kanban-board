<script setup>
import {ref, computed, watch} from 'vue'
import TaskCard from "./TaskCard.vue"
import KanbanColumn from './KanbanColumn.vue'

const count = ref(0)

function increment() {
    count.value++
}

const taskText = ref("")

const columns = ref([
  {
    id: 1,
    title: 'Todo',
    tasks: [
      {
        id: 1,
        text: 'Learn Vue'
      }
    ]
  },
  {
    id: 2,
    title: 'Doing',
    tasks: []
  },
  {
    id: 3,
    title: 'Done',
    tasks: []
  }
])

const totalTasks = computed(() => columns.value.reduce(
    (count, column) => count + column.tasks.length, 0
))


const saved =
  localStorage.getItem('kanban')

if (saved) {
  columns.value =
    JSON.parse(saved)
}

watch(columns, (value) => {
    localStorage.setItem('kanban', JSON.stringify(value))
}, { deep: true })

function addTask(){
    if (!taskText.value.trim()) return

    columns.value[0].tasks.push({id: Date.now(), text: taskText.value})

    taskText.value=""
}

function deleteTask(columnId, taskId) {
    const column = columns.value.find(col => col.id === columnId)

    if(!column) return

    column.tasks = column.tasks.filter(task => task.id !== taskId)
    
}

function moveTaskRight(columnId, taskId) {
    const currentIndex = columns.value.findIndex(col => col.id === columnId)

    if (currentIndex === -1 || currentIndex === columns.value.length - 1) return

    const currentColumn = columns.value[currentIndex]

    const nextColumn = columns.value[currentIndex + 1]

    const taskIndex = currentColumn.tasks.findIndex(task => task.id === taskId)

    const [task] = currentColumn.tasks.splice(taskIndex, 1)

    nextColumn.tasks.push(task)
}

</script>

<template>
   <h1>Kanban Board</h1>

   <h2>Total Tasks: {{ totalTasks }}</h2>
    <div class = "task-form">
        <input v-model="taskText" placeholder="Enter task" @keyup.enter="addTask"/>
        <button @click="addTask">Add Task</button>
    </div>
    <div class="board">
    <KanbanColumn
      v-for="column in columns"
      :key="column.id"
      :column="column"
      @delete-task="deleteTask"
      @move-right="moveTaskRight"/>  

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
