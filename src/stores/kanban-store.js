import {defineStore} from 'pinia'

// Composition API style Store
export const useKanbanStore = defineStore('kanban', () => {
    const columns = ref(JSON.parse(localStorage.getItem('kanban')) || [
        { id: 1, name: 'To Do', tasks: [] },
        { id: 2, name: 'In Progress', tasks: [] },
        { id: 3, name: 'Done', tasks: [] }
    ])

    const totalTasks = computed(() => columns.value.reduce(
        (count, column) => count + column.tasks.length, 0
    ))

    function addTask(text) {
        columns.value[0].tasks.push({
            id: Date.now(),
            text
        });
    }

    function deleteTask(columnId, taskId) {
        const column = columns.value.find(col => col.id === columnId);
        column.tasks = column.tasks.filter(task => task.id !== taskId);
    }

    function moveTaskRight(columnId, taskId) {
        const currentIndex = columns.value.findIndex(col => col.id === columnId);   
    }

    return {
        columns,
        totalTasks,
        addTask,
        deleteTask,
        moveTaskRight
    }
})