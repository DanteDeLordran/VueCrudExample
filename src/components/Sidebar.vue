<script setup lang="ts">
import { defineProps } from 'vue'
defineProps({
    showSidebar: Boolean
})
</script>

<template>
    <VaSidebar v-bind="showSidebar" style="height: 100vh;" >
        <VaSidebarItem to="/">
            <VaSidebarItemContent>
                <VaIcon name="home" />
                <VaSidebarItemTitle>
                    Home
                </VaSidebarItemTitle>
            </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem to="/homeworks">
            <VaSidebarItemContent>
                <VaIcon name="delete" />
                <VaSidebarItemTitle>
                    Homeworks
                </VaSidebarItemTitle>
            </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSpacer />
        <VaSidebarItem to="/login">
            <VaSidebarItemContent>
                <VaIcon name="phone" />
                <VaSidebarItemTitle>
                    Logout
                </VaSidebarItemTitle>
            </VaSidebarItemContent>
        </VaSidebarItem>
    </VaSidebar>
</template>
  