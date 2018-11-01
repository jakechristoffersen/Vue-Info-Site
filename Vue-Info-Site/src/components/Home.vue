<template>

    <div class="home">
        <b-container>
            <carousel class="carousel"></carousel>
            <cards class="cards"></cards>
            <requestinfo class="requestinfo"></requestinfo>
            <h1>{{ msg }}</h1>
        </b-container>
    </div>
</template>

<script>
    import Carousel from './Carousel.vue'
    import Cards from './Cards.vue'
    import Requestinfo from './Requestinfo.vue'

    export default {
        name: 'home',
        data() {
            return {
                msg: 'Header'
            }
        },

        components: {
            Carousel,
            Cards,
            Requestinfo
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>