import {defineStore} from 'pinia'

export const useKanbanStore = defineStore('kanban', 
    {
        state: () => ({
            columns: JSON.parse(localStorage.getItem('kanban')) || [
                { id: 1, name: 'To Do', tasks: [] },
                { id: 2, name: 'In Progress', tasks: [] },
                { id: 3, name: 'Done', tasks: [] }
            ]
        }),

        actions: {
            addTask(text) {
               this.columns[0].tasks.push({
                    id: Date.now(),
                    text
               });
            },
            deleteTask(columnId, taskId) {
                const column = this.columns.find(col => col.id === columnId);

                column.tasks = column.tasks.filter(task => task.id !== taskId);
            },
            moveTaskRight(columnId, taskId) {
                const currentIndex = this.columns.findIndex(col => col.id === columnId);

                if (currentIndex === -1 || currentIndex === this.columns.length - 1) return

                const currentColumn = this.columns[currentIndex]
                const nextColumn = this.columns[currentIndex + 1]
                const taskIndex = currentColumn.tasks.findIndex(task => task.id === taskId)

                const [task] = currentColumn.tasks.splice(taskIndex, 1)
                nextColumn.tasks.push(task)
            }
        },

        getters: {
            totalTasks: (state) => state.columns.reduce(
                (sum, column) => sum + column.tasks.length, 0
            )
        }
    }
)