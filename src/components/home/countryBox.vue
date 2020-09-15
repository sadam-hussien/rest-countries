<template>
    <router-link :to="`/details/${name}`" tag="div">
        <div class="country-box">

            <div class="img">
                <img :src="flag" alt="flag" class="img-fluid">
            </div>

            <div class="content">
                <h6 class="name font-weight-bold" v-text="name"></h6>
                <div class="box-inner">
                    <span class="text">population</span>
                    <span class="response" v-text="population"></span>
                </div>
                <div class="box-inner">
                    <span class="text">region</span>
                    <span class="response" v-text="region"></span>
                </div>
                <div class="box-inner">
                    <span class="text">capital</span>
                    <span class="response" v-text="capital"></span>
                </div>
            </div>

        </div>
    </router-link>
</template>

<script>
export default {
    name: "countryBox",

    props: ["flag", "name", "population", "region", "capital"],
}
</script>
