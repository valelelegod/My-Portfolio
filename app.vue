<template>
    <div class="loading" v-if="loading"> 
         <svg width="32px" height="32px">
             <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
             <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
         </svg>
     </div>
     <div class="landing-page" v-if="!loading">
         <div class="container mx-auto">
             <Header/>
             <AboutMe/>
             <TechStack/>
             <Projects/>
             <Testimonials/>
             <Contact/>
         </div>
         <Footer/>
     </div>
 </template>
 
 
 <script>
 
 export default {
     setup() {
         useHead({
             title: 'Mocanu Valentin | Full Stack Developer',
             viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
             charset: 'utf-8',
             lang: 'en',
             meta: [
                 { name: 'description', content: 'content="Full Stack Developer at TechBolide. Currently working on Ionic projects. Custom UX/UI Design, Front-end and Back-end Development."' }
             ],
             htmlAttrs: { lang: 'en' }
         })
     },
     data() {
         return {
             loading: true,
         }
     },
     created() {
         this.resetLoading();
     },
     methods: {
         resetLoading() {
             setTimeout(() => {
                 this.loading = false;
             }, 1500);
         }
     },
 }
 </script>
 