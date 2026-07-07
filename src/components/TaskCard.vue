<template>
  <div class="task" style="color: black;">
    <span>{{ task.text }}</span>
    <button @click="$emit('move-right', task.id)" class="move-btn">→</button>
    <button @click="$emit('delete-task', task.id)" class="delete-btn">X</button>
  </div>
</template>

<script setup>
defineProps({
  task: Object
})

defineEmits(['move-right', 'delete-task'])
</script>

<style scoped>
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 12px;
  margin-top: 10px;
  border-radius: 6px;
}

.delete-btn {
  border: none;
  background: red;
  color: white;
  cursor: pointer;
  padding: 4px 8px;
}
</style>