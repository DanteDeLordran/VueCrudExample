<script setup lang='ts' >
import Table from '@/components/Table.vue';
import { onMounted, ref } from 'vue';
import type { DataTableColumnSource } from 'vuestic-ui';
import type { Homework } from './homeworks/interfaces/Homework';

const homeworks = ref<Homework[]>([])

onMounted(async () => {
    const data = await fetch('https://api-rest-tareas.onrender.com/api/task')
    homeworks.value = await data.json()
})

const columns = [
    {
        key: '_id',
        sortable: true
    },
    {
        key: 'name',
        sortable: true
    },
    {
        key: 'description',
        sortable: true
    },
    {
        key: 'status',
        sortable: true
    },
    {
        key: 'actions',
        sortable: false
    },
] as DataTableColumnSource<string>[];

const perPage = 20
const pages = homeworks.value.length
const page = ref(1)
</script>

<template>
    <VaDataTable :columns="columns" :per-page="perPage" :current-page="page" :items="homeworks" striped animated>
        <template #bodyAppend>
            <tr>
                <td colspan="6">
                    <div class="flex justify-center mt-4">
                        <VaPagination v-model="page" :pages="pages" :visible-pages="5" />
                    </div>
                </td>
            </tr>
        </template>
    </VaDataTable>
</template>

