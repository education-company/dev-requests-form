<template>
    <v-sheet :elevation="3" :width="500" rounded>
        <v-container>
            <div class="text-h2 mb-5">Development Request</div>
            <FormContent />
        </v-container>
    </v-sheet>
</template>

<script setup>
import FormContent from './FormContent.vue';
</script>