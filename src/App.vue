<template>
  <v-app>
    <v-main>
        <v-layout :class="['fluid', 'fill-height','align-center', 'justify-center', 'bg-indigo-darken-1']">
          <form-sheet />
        </v-layout>
    </v-main>
  </v-app>
</template>

<script setup>
import FormSheet from './components/FormSheet.vue';

</script>
