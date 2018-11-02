<template>

    <div>
        <b-card bg-variant="light">
            <b-form-group horizontal breakpoint="lg" label="Request Info" label-size="lg" label-class="font-weight-bold pt-0"
                class="mb-0">
                <b-form-group horizontal label="Your Name:" label-class="text-sm-right" label-for="nestedStreet">
                    <b-form-input id="nestedStreet"></b-form-input>
                </b-form-group>
                <b-form-group horizontal label="Your Pets Name:" label-class="text-sm-right" label-for="nestedCity">
                    <b-form-input id="nestedCity"></b-form-input>
                </b-form-group>
                <b-form-group horizontal label="Email:" label-class="text-sm-right" label-for="nestedState">
                    <b-form-input id="nestedState"></b-form-input>
                </b-form-group>
                <b-form-group horizontal label="Phone Number:" label-class="text-sm-right" label-for="nestedCountry">
                    <b-form-input id="nestedCountry"></b-form-input>
                </b-form-group>
                <b-form-group horizontal label="Tell Me About your Pet" label-class="text-sm-right" label-for="nestedCountry">
                    <b-form-textarea id="textarea1" v-model="text" placeholder="Enter something" :rows="3" :max-rows="6">
                    </b-form-textarea>
                </b-form-group>
                <b-form-group horizontal label="Best Time to Contact?" label-class="text-sm-right" class="mb-0">
                    <b-form-radio-group class="pt-2" :options="['Morning', 'Afternoon', 'Evening']" />
                </b-form-group>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </b-card>
    </div>
    <!-- form-group-nested.vue -->
</template>

<script>
    
    export default {
        name: 'requestinfo',
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>