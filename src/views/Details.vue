<template>
    <section class="details page">
        <div class="container">
            <div class="content">

                <div class="head-content-area">

                    <!-- start back-button  -->
                    <router-link :to="{ name: 'home' }" tag="button" class="back-button my-btn">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                        <span>back</span>
                    </router-link>
                    <!-- // end back-button  -->

                </div>

                <!-- start item   -->
                <div class="item" v-if="country">
                    <div class="country-item" v-for="(c, index) in country" :key="index">
                        <div class="row justify-content-between">

                            <!-- img  -->
                            <div class="col-md-6 col-lg-5">
                                <div class="img">
                                    <img :src="c.flag" alt="the country flag" class="img-fluid">
                                </div>
                            </div>

                            <!-- details  -->
                            <div class="col-md-6 col-lg-6 d-flex align-items-center">
                                <div class="country-details">
                                    <h2 class="name" v-text="c.name"></h2>
                                    <div class="details-box">
                                        <div class="row">

                                            <div class="col-sm-6">
                                                <div class="detail-box">
                                                    <span class="text text-capitalize">native name</span>
                                                    <span class="response text-capitalize" v-text="c.nativeName"></span>
                                                </div>
                                                <div class="detail-box">
                                                    <span class="text text-capitalize">population</span>
                                                    <span class="response text-capitalize" v-text="c.population"></span>
                                                </div>
                                                <div class="detail-box">
                                                    <span class="text text-capitalize">region</span>
                                                    <span class="response text-capitalize" v-text="c.region"></span>
                                                </div>
                                                <div class="detail-box">
                                                    <span class="text text-capitalize">sub region</span>
                                                    <span class="response text-capitalize" v-text="c.subregion"></span>
                                                </div>
                                                <div class="detail-box">
                                                    <span class="text text-capitalize">capital</span>
                                                    <span class="response text-capitalize" v-text="c.capital"></span>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="detail-box">
                                                    <span class="text text-capitalize">top level domail</span>
                                                    <span class="response text-capitalize" v-for="(domain, index) in c.topLevelDomain" :key="index">{{domain}} {{ index == c.topLevelDomain.length - 1 ? " " : ", "}}</span>
                                                </div>
                                                <div class="detail-box">
                                                    <span class="text text-capitalize">currencies</span>
                                                    <span class="response text-capitalize" v-for="(currency, index) in c.currencies" :key="index">{{currency.name}} {{ index == c.currencies.length - 1 ? " " : ", "}}</span>
                                                </div>
                                                <div class="detail-box">
                                                    <span class="text text-capitalize">languages</span>
                                                    <span class="response text-capitalize" v-for="(lang, index) in c.languages" :key="index">{{lang.name}} {{ index == c.languages.length - 1 ? " " : ", "}}</span>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <div class="borders-details">
                                                    <div class="detail-box">
                                                        <span class="text text-capitalize">border countries</span>
                                                        <span class="border-text text-capitalize" v-for="(border, index) in c.borders" :key="index">{{border}}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!-- // end item  -->

            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "Details",

    data() {
        return {
            country: null,
        }
    },

    mounted() {
        axios.get(`https://restcountries.eu/rest/v2/name/${this.$route.params.id}`).then( result => {

            this.country = result.data;

        });
    }
}
</script>
