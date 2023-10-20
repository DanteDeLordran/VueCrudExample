<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
    showSidebar: Boolean
})
</script>

<template>
    <VaNavbar color="primary" class="py-2">
        <template #left>
            <VaButton @click="$emit('toggle-sidebar')" :icon="showSidebar ? 'menu_open' : 'menu'"  />
        </template>
        <template #center>
            <va-navbar-item class="font-bold text-3xl">
                Danza Profesional Coahuila
            </va-navbar-item>
        </template>
    </VaNavbar>
</template>
  

  