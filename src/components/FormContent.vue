<template>
    <v-form @submit.prevent="handleSubmit">
        <v-input>
            <v-text-field v-model="firstname" dense clearable label="First name" :rules="requiredField"
                variant="outlined" />
        </v-input>
        <v-input>
            <v-text-field v-model="lastname" clearable label="Last name" :rules="requiredField"
                variant="outlined" />
        </v-input>
        <v-input>
            <v-text-field v-model="email" clearable label="Email address" placeholder="john.doe@educationcompany.co.uk"
                type="email" :rules="emailRules" variant="outlined" />
        </v-input>
        <v-input>
            <v-text-field v-model="customer" clearable label="Customer" :rules="requiredField" variant="outlined" />
        </v-input>
        <v-input>
            <v-select v-model="priority" label="Priority" :items="['Low', 'Medium', 'High']" :rules="requiredField"
                variant="outlined" data-cy="priority-select" />
        </v-input>
        <v-input>
            <v-textarea v-model="request" label="Request" :rules="requiredField" variant="outlined" />
        </v-input>
        <v-btn type="submit" block class="bg-green-lighten-1"><v-progress-circular indeterminate color="light-gray"
                v-if="loading"></v-progress-circular><span v-else>Submit</span></v-btn>
    </v-form>
    <div class="form-messages">
        <p v-if="showIncompleteFormMessage && !submissionSuccessful" class="error-message">Please complete the form</p>
        <p v-if="submissionSuccessful" class="success-message">Your form has been submitted successfully</p>
    </div>
</template>

<script>

export default {
    data: () => ({
        valid: false,
        firstname: '',
        lastname: '',
        email: '',
        customer: '',
        priority: '',
        request: '',
        requiredField: [
            value => {
                if (value) return true;
                return 'Field is required.';
            },
        ],
        emailRules: [
            value => {
                if (value) return true;
                return 'E-mail is required.';
            },
            value => {
                if (/.+@.+\..+/.test(value)) return true;
                return 'E-mail must be valid.';
            },
        ],
        submissionSuccessful: false,
        showIncompleteFormMessage: false,
        loading: false,
    }),
    methods: {
        handleSubmit() {
            if (this.validateForm()) {
                this.showIncompleteFormMessage = false;
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.submissionSuccessful = true;
                }, 3000);
            } else {
                this.submissionSuccessful = false;
                this.showIncompleteFormMessage = true;
            }
        },
        validateForm() {
            return (
                this.firstname &&
                this.lastname &&
                this.email &&
                this.customer &&
                this.priority &&
                this.request
            );
        },
    },
};
</script>

<style scoped>
.form-messages {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    padding: 5px;
}

.success-message {
    color: #66BB6A;
    font-weight: bold;
}

.error-message {
    color: #B00020;
    font-weight: bold;
}
</style>
