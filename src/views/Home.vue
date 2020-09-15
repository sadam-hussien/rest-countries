<template>
    <section class="home page">

        <div class="container">
            <div class="content">

                <!-- start head-content-area  -->
                <div class="head-content-area d-flex justify-content-between align-items-center">

                    <!-- search  -->
                    <div class="search-area d-flex align-items-center">
                        <label for="the-search"><ion-icon name="search-outline"></ion-icon></label>
                        <input type="text" placeholder="search for a country" class="form-control" id="the-search" v-model="searchKeyword" @input="searchFilter">
                    </div>

                    <!-- select-filter  -->
                    <div class="select-filter">
                        <div class="filter-result" @click="toggleFilter =! toggleFilter"><span class="text">{{filterinp == " " ? "filter by region" : filterinp}}</span><span class="icon"></span></div>

                        <ul class="list-unstyled m-0 p-0 filter-list" :class="{'active': toggleFilter}">
                            <li v-for="(list, index) in lists" :key="index">
                                <input type="radio" :id="`${list}-${index}`" :value="list" v-model="filterinp" @change="selectFilter">
                                <label :for="`${list}-${index}`" v-text="list"></label>
                            </li>
                        </ul>
                    </div>

                </div>
                <!-- // end head  -->

                <!-- start countries  -->
                <div class="countries" v-if="countries">

                    <div class="row">
                        <div class="col-sm-6 col-lg-3" v-for="(country, index) in countries" :key="index">
                            <country-box
                            :flag="country.flag"
                            :name="country.name"
                            :population="country.population"
                            :region="country.region"
                            :capital="country.capital"
                            />
                        </div>
                    </div>

                </div>
                <!-- // end countries  -->

            </div>
        </div>

    </section>
</template>

<script>
// axios
import axios from "axios";

// country box
import countryBox from "@/components/home/countryBox";

export default {
    name: "Home",

    components: {
        countryBox
    },

    data() {
        return {
            countries: null,
            searchKeyword: "",
            lists: [
                "Africa",
                "Americas",
                "Asia",
                "Europe",
                "Oceania"
            ],
            filterinp: " ",
            toggleFilter: false,
        }
    },

    methods: {
        getcountries: function () {
            axios.get(`https://restcountries.eu/rest/v2/all`).then( result => {

                this.countries = result.data;

            });
        },
        searchFilter: function () {
            if (this.searchKeyword != "") {

                this.filterinp = " ";

                axios.get(`https://restcountries.eu/rest/v2/name/${this.searchKeyword}`).then( result => {
                    this.countries = result.data;
                });

            } else {

                this.getcountries();

            }
        },
        selectFilter: function () {
            this.searchKeyword = "";
            axios.get(`https://restcountries.eu/rest/v2/region/${this.filterinp}`).then( result => {
                this.countries = result.data;
            });
        }
    },

    mounted() {
        this.getcountries();
    }
}
</script>
