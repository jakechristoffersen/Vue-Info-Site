<template>

    <div id="app">

        <b-navbar toggleable="md" type="dark" variant="info">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">
                <img src="./assets/logo.png" width="50" class="d-inline-block align-top">
                Business Name
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>User Options</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Signout</b-dropdown-item>
                        <!--TODO Conditional Login/Signout and Profile-->
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
        /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
        text-align: center;
        /* color: #2c3e50; */
        /* margin-top: 60px; */
    }
</style>