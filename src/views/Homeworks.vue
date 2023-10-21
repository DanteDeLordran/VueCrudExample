<script setup lang='ts' >
import { computed, onMounted, ref } from 'vue';
import type { DataTableColumnSource } from 'vuestic-ui';
import type { Homework } from './homeworks/interfaces/Homework';
import axios from 'axios';

const homeworks = ref<Homework[]>([])
const perPage = 25
const pages = computed(() => Math.ceil(homeworks.value.length / perPage))
const page = ref(1)
const showModal = ref(false)
const selectedHomework = ref<Homework>({ _id: '', description: '', name: '', status: true });
const tempHomework = ref<Homework>({ _id: '', description: '', name: '', status: true });

const columns: DataTableColumnSource<string>[] = [
    { key: '_id', sortable: true },
    { key: 'name', sortable: true },
    { key: 'description', sortable: true },
    { key: 'status', sortable: true },
    { key: 'actions', sortable: false },
];

onMounted(async () => {
    const response = await axios.get('https://api-rest-tareas.onrender.com/api/task')
    homeworks.value = response.data
})

const editHomework = (homework: Homework) => {
    if (homework) {
        tempHomework.value = { ...homework }; // create a copy of homework
        showModal.value = true;
    }
};

const updateHomework = async () => {
    if (tempHomework.value) {
        selectedHomework.value = { ...tempHomework.value }; // create a copy of tempHomework
        const index = homeworks.value.findIndex(homework => homework._id === selectedHomework.value!._id);
        if (index !== -1) {
            homeworks.value[index] = selectedHomework.value!;
        }
        showModal.value = false;
        //await axios.put(`https://api-rest-tareas.onrender.com/api/task/`, selectedHomework.value);
    }
};


</script>

<template>
    <VaDataTable :columns="columns" :per-page="perPage" :current-page="page" :items="homeworks" striped animated>
        <template #cell(actions)="{ rowData }">
            <VaButton preset="plain" icon="edit" @click="editHomework(rowData)" />
            <VaButton preset="plain" icon="delete" class="ml-3" />
        </template>
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

    <VaModal v-model="showModal" blur no-dismiss title="Edit Homework" hide-default-actions>
        <VaForm class="flex flex-col items-center justify-center mb-8">
            <VaInput v-model="tempHomework.name" label="Name" class="w-full max-w-md" />
            <VaInput v-model="tempHomework.description" label="Description" class="w-full max-w-md mt-4" />
            <VaSwitch v-model="tempHomework.status" label="Status" class="mt-4" />
        </VaForm>
        <VaDivider />
        <template #footer>
            <VaButton preset="secondary" border-color="primary" @click="showModal = !showModal">Cancel</VaButton>
            <VaButton class="ml-2" @click="updateHomework"> Save changes </VaButton>
        </template>
    </VaModal>
</template>