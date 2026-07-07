# Vue Kanban Board

A simple Kanban board built with **Vue 3**, designed as a learning project for developers transitioning from React to Vue.

## Features

- Create tasks
- Delete tasks
- Move tasks between columns
- Persistent state using Local Storage
- Component-based architecture
- Pinia state management (available in `pinia` branch)

---

## Tech Stack

### Main Branch

- Vue 3
- Vite
- Composition API

### Pinia Branch

- Vue 3
- Vite
- Composition API
- Pinia

---

## Project Structure

```text
src/
├── components/
│   ├── KanbanBoard.vue
│   ├── KanbanColumn.vue
│   └── TaskCard.vue
│
├── stores/
│   └── kanban.js        # Available in pinia branch
│
├── App.vue
└── main.js
```

---

## Learning Goals

This project was created to learn the core Vue concepts:

### Vue Fundamentals

- Single File Components (SFC)
- Template syntax
- `v-for`
- `v-model`
- Event handling (`@click`)
- Component composition

### Composition API

- `ref`
- `computed`
- `watch`
- `defineProps`
- `defineEmits`

### State Management

The `pinia` branch demonstrates:

- Global state management with Pinia
- Store actions
- Store getters
- Sharing state across components
- Replacing component-local state with a centralized store

---

