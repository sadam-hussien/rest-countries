<template>
    <header class="main-header d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">

            <!-- start the-logo  -->
            <div class="the-logo">
                <h5 class="text m-0 d-flex align-items-center">
                    where in the world ?
                </h5>
            </div>
            <!-- // end the-logo  -->

            <!-- start the-node  -->
            <div class="the-mode">

                <button class="box-mode dark-mode" v-if="!darkTheme" @click="toggleTheme">
                    <ion-icon name="moon"></ion-icon>
                    <span>dark mode</span>
                </button>

                <button class="box-mode light-mode" v-if="darkTheme" @click="toggleTheme">
                    <ion-icon name="sunny"></ion-icon>
                    <span>light mode</span>
                </button>

            </div>
            <!-- // end the-mode  -->

        </div>
    </header>
</template>

<script>
import {mapState, mapMutations} from "vuex";

export default {
    name: "theHeader",

    computed: {
        ...mapState(["darkTheme"])
    },

    methods: {
        ...mapMutations(["TOGGLE_THEME"]),
        toggleTheme: function () {
            this.TOGGLE_THEME(!this.darkTheme);
        }
    }

}
</script>
