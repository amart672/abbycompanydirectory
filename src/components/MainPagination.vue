<script setup>
  import { ref } from 'vue'
  const pages = ref(5)
  const activePage = ref(4)

  const prevPage = () => {
   if (activePage.value > 1) {
    activePage.value--
   }
  }
  const nextPage = () => {
   if (activePage.value < pages.value) {
    activePage.value++
   }
  }
</script>

<template>
  <div class="pagination">
    <button class="action" :disabled="activePage === 1" @click="prevPage">Prev</button>
    <button
      v-for="page in pages"
      :key="page"
      class="page"
      :class="page === activePage ? 'active' : ''"
      @click="activePage = page"
    >
      {{ page }}
    </button>
    <button class="action" :disabled="activePage === pages" @click="nextPage">Next</button>
  </div>
</template>

<style lang="postcss" scoped>
  .pagination {
    @apply flex justify-center gap-4;
    .action {
      @apply rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md hover:bg-slate-600 disabled:text-slate-400 hover:disabled:bg-slate-100;
    }
    .page {
      @apply rounded-md bg-slate-100 p-2 font-medium text-slate-700 shadow-md hover:bg-slate-300;
      &.active {
        @apply bg-purple-700 text-slate-100 hover:bg-purple-500;
      }
    }
  }
</style>
