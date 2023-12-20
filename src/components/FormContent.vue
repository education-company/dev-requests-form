<template>
    <v-form @submit.prevent>
        <v-text-field label="First name" :rules="requiredField"></v-text-field>
        <v-text-field label="Last name" :rules="requiredField"></v-text-field>
        <v-text-field label="Email address" placeholder="johndoe@gmail.com" type="email" :rules="emailRules"></v-text-field>
        <v-text-field label="Customer" :rules="requiredField"></v-text-field>
        <v-select label="Priority" :items="['Low', 'Medium', 'High']" :rules="requiredField"></v-select>
        <v-textarea label="Request" :rules="requiredField"></v-textarea>
        <v-btn type="submit">Submit</v-btn>
    </v-form>
</template>


<script>
 export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      requiredField: [
        value => {
          if (value) return true

          return 'Field is required.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }
</script>