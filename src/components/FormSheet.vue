<template>
    <v-sheet :elevation="3" :width="700" rounded>
        <v-container>
            <v-container class="d-flex align-center justify-space-between"> 
                <v-img src="../assets/EdCo Logo.png" max-width="200" aspect-ratio="16/9"></v-img>
                <h2>Development Request Form</h2>
            </v-container>
            <FormContent />
        </v-container>
    </v-sheet>
</template>

<script setup>
import FormContent from './FormContent.vue';
</script> 