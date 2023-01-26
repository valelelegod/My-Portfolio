<template>
    <header>
        <h1>&lt;<VueWriter :array="['Valentin', 'valelele', 'Mocanu']" :eraseSpeed="100" :typeSpeed="100" :delay="1000"/>/></h1>
        <ul class="lg:flex" :class="{ 'hidden': !menu }">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li @click="scrollTo('projectsView')">Portfolio</li>
            <li @click="scrollTo('testimonialsView')">Testimonials</li>
            <li @click="scrollTo('contactView')">Contact</li>

            <div class="sep">
                <div class="media">
                    <li><a target="_blank" aria-label="Github" href="https://bit.ly/3NPp8VY"><font-awesome-icon :icon="['fab', 'github']" class="social"/></a></li>
                    <li><a target="_blank" aria-label="Linkedin" href="https://bit.ly/3O1Zm1b"><font-awesome-icon :icon="['fab', 'linkedin']" class="social"/></a></li>
                    <li><a target="_blank" aria-label="Instagrams" href="https://bit.ly/3RbIpUC"><font-awesome-icon :icon="['fab', 'instagram']" class="social"/></a></li>
                </div>
                <!-- <li class="language"> <img src="../assets/images/ro.svg"/> ROU</li> -->
            </div>
        </ul>
        <button class="mobile block lg:hidden" @click="menu = !menu">
            <font-awesome-icon :icon="getIconMenu()" />
        </button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VueWriter from 'vue-writer'

export default defineComponent({
    name: "Toolbar",
    components: { VueWriter },
    data() {
      return {
          menu: false,
      }
    },
    methods: {
        scrollTo(string: string) {
            document.getElementById(string).scrollIntoView({
                behavior: "smooth", block: 'center'
            });
            this.menu = false;
        },
        getIconMenu() {
            if(this.menu) {
                return ['fa', 'times'];
            } else {
                return ['fa', 'bars']
            }
        }
    },
})
</script>
