<template>
  <div class="column">
    <h2>
      {{ column.title }}
      ({{ column.tasks.length }})
    </h2>

    <TaskCard
      v-for="task in column.tasks"
      :key="task.id"
      :task="task"
      @delete-task="$emit('delete-task', column.id, $event)"
      @move-right="$emit('move-right', column.id, $event)"
    />
  </div>
</template>

<script setup>
import TaskCard from "./TaskCard.vue"

defineProps({
  column: Object
})

defineEmits([
  'delete-task'
])
</script>