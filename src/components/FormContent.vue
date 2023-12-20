<template>
    <v-form @submit.prevent>
        <v-input>
            <v-text-field dense clearable label="First name" :rules="requiredField" variant="outlined" />
        </v-input>
        <v-input><v-text-field clearable label="Last name" :rules="requiredField" variant="outlined" /></v-input>
        <v-input><v-text-field clearable label="Email address" placeholder="john.doe@educationcompany.co.uk" type="email"
                :rules="emailRules" variant="outlined" /></v-input>
        <v-input><v-text-field clearable label="Customer" :rules="requiredField" variant="outlined" /></v-input>
       <v-input><v-select label="Priority" :items="['Low', 'Medium', 'High']" :rules="requiredField" variant="outlined" /></v-input>
        <v-input><v-textarea label="Request" :rules="requiredField" variant="outlined" /></v-input>
        <v-btn type="submit" block class="bg-green-lighten-1">Submit</v-btn>
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

<style scoped>
</style>

