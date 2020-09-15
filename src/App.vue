<template>
    <div id="app" :class="darkTheme ? 'dark-theme' : 'light-theme' ">

        <!-- start the-header  -->
        <the-header></the-header>
        <!-- // end the-header  -->

        <router-view/>
    </div>
</template>

<script>

import {mapState} from "vuex";

// the header
import theHeader from "@/components/global/theHeader";


export default {
    components: {
        theHeader,
    },

    computed: {
        ...mapState(["darkTheme"]),
    }

}
</script>
