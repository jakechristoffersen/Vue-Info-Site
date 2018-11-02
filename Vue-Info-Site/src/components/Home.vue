<template>

    <div class="home">
        <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" height="300">
            <v-layout align-center column justify-center>
                <h1 class="display-2 font-weight-thin mb-3">The Dog Page</h1>
                <h4 class="subheading">We train people on how to interact with their doge!</h4>
            </v-layout>
        </v-parallax>
        <b-container>

            <cards class="cards"></cards>
            <v-timeline align-top>
                <v-timeline-item v-for="(item, i) in items" :color="item.color" :icon="item.icon" :key="i" fill-dot>
                    <v-card :color="item.color" light>
                        <v-card-title class="title">{{item.header}}</v-card-title>
                        <v-card-text class="white text--primary">
                            <p>{{item.text}}</p>
                            <v-btn :color="item.color" class="mx-0" outline>
                                Tell me more!
                            </v-btn>
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>

            <requestinfo class="requestinfo"></requestinfo>

        </b-container>

        <v-parallax dark src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
            <v-layout align-center column justify-center>
                <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
                <h4 class="subheading">Build your application today!</h4>
            </v-layout>
        </v-parallax>
    </div>
</template>

<script>
    import Carousel from './Carousel.vue'
    import Cards from './Cards.vue'
    import Requestinfo from './Requestinfo.vue'

    export default {
        name: 'home',
        data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'fa-star',
          header: 'Dog Training in the Park',
          text: 'Join us for a day at the dog park doing treats and training'
        },
        {
          color: 'purple darken-1',
          icon: 'fa-book',
          header: 'The Dog Whisperer Book Signing',
          text: 'First 10 people get an autographed copy'
        },
        {
          color: 'green lighten-1',
          icon: 'fa-paw',
          header: 'Downtown Dog Walk',
          text: 'Come on a downtown dog walk, bring your best friend, and anyone else....'
        },
        {
          color: 'indigo',
          icon: 'fa-bath',
          header: 'Learn how to wash that dirty dog',
          text: '....cause he stinks!'
        }
      ]
    }),

        components: {
            Carousel,
            Cards,
            Requestinfo
        }
    }
</script>


<style scoped>

</style>