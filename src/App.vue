How can i put the sidebar and navbar in different components 
<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
import { ref } from 'vue';
import { useBreakpoint } from 'vuestic-ui';

const showSidebar = ref<boolean>(true)
const breakpoint = useBreakpoint()
</script>

<template>
  <VaLayout :left="{ absolute: breakpoint.smDown }" style="height: 100vh;">
    <template #top>
      <VaNavbar color="primary" class="py-2">

        <template #left>
          <VaButton @click="showSidebar = !showSidebar" :icon="showSidebar ? 'menu_open' : 'menu'" />
        </template>

        <template #center>
          <va-navbar-item class="font-bold text-3xl"  >
            Danza Profesional Coahuila
          </va-navbar-item>
        </template>

      </VaNavbar>
    </template>
    
    <template #left>
      <VaSidebar v-model="showSidebar">
        <VaSidebarItem to="/" >
          <VaSidebarItemContent>
            <VaIcon name="home" />
            <VaSidebarItemTitle>
              Home
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSidebarItem to="/homeworks">
          <VaSidebarItemContent>
            <VaIcon name="phone" />
            <VaSidebarItemTitle>
              Homeworks
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
        <VaSeparator/>
        <VaSidebarItem>
          <VaSidebarItemContent>
            <VaIcon name="phone" />
            <VaSidebarItemTitle>
              Logout
            </VaSidebarItemTitle>
          </VaSidebarItemContent>
        </VaSidebarItem>
      </VaSidebar>
    </template>

    <template #content>
      <main class="p-6">
        <RouterView/>
      </main>
    </template>
  </VaLayout>
</template>