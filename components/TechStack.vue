<template>
    <div id="techView" class="tech">
        <h2>Technologies and programming languages</h2>
        <h1>Tools and Tech Stack</h1>
        <div v-for="(techs,key) in techStacks" class="technologies">
            <h4>{{ key }}</h4>
            <div class="languages">
                <div class="language" :style="{ backgroundImage: `url('/images/techs/${tech}.svg')` }" v-for="tech in techs" v-on:click="visitTech(tech)"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            techStacks: {
                "Backend": ["csharp", "laravel", "nodejs", "php", "java"],
                "Frontend": ["html5", "css", "sass", "js", "ts", "vue", "angular", "jquery", "nuxt", "ionic"],
                "Datastorage": [ "mysql", "mongo", "sqlite" ],
                "Tools": [ "git", "vsc", "vs", "jetbrains" ]
            },
            visitTech(tech: string) {
                console.log(tech);
            }
        }
    }
}
</script>
