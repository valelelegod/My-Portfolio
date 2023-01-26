<template>
    <section class="aboutMe lg:mt-[6rem] mt-10">
        <div class="informations flex flex-col-reverse justify-between lg:flex-row gap-[100px]">
            <div class="w-full">
                <div class="tag">{{ data.tag }}</div>
                <h1 class="name">Valentin <span>'valelele'</span> Mocanu</h1>
                <h1 class="description">{{ data.description }}</h1>
                <div class="details">
                    <div class="item" v-for="info in data.info">
                        <font-awesome-icon class="icon" :icon="['fas', info.icon]"/>
                        {{ info.text }}
                    </div>
                </div>
                <div class="natives">
                    <div class="language"><font-awesome-icon class="icon" :icon="['fas', 'language']"/></div>
                    <div class="languages">
                        <div class="item" v-for="language in data.languages">
                            <img width="22" height="22" :src="`/images/${language.icon}.svg`" :alt="language.icon" rel="preload"/>
                            {{ language.text }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-auto flex justify-center lg:justify-end">
                <div class="profile-image" :style="{ backgroundImage: `url('${profileURL}')` }"></div>
            </div>
        </div>
        
    </section>
</template>

<script lang="ts">

export default{
    data() {
        return {
            profileURL: 'https://avatars.githubusercontent.com/u/47229954',
            data: {
                tag: "Full Stack Developer",
                name: ['Valentin', "'valelele'", "Mocanu"],
                description: "“Small minds are concerned with the extraordinary, great minds with the ordinary”",
                info: [
                    { icon: 'user', text: '21 years old'},
                    { icon: 'location-dot', text: 'Bucharest, Romania'},
                    { icon: 'graduation-cap', text: 'UPG Ploiesti Computer Science'},
                ],
                languages: [
                    { icon: 'ro', text: 'Native'},
                    { icon: 'gb', text: 'Fluent'},
                    { icon: 'de', text: 'Intermediate'},
                ]
            }
        }
    }
}
</script>
