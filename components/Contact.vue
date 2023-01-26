<template>
    <div id="contactView" class="contact" :ref="'contact'">
        <h2>Contact</h2>
        <h3>Get in touch</h3>
        <div class="group">
            <form ref="form" @submit.prevent="sendEmail">
                <div class="input-box">
                    <font-awesome-icon class="icon" :icon="['fas', 'user']"/>
                    <input name="from_name" type="text" placeholder="Full Name" spellcheck="false"/>
                </div>
                <div class="input-box">
                    <font-awesome-icon class="icon" :icon="['fas', 'at']"/>
                    <input name="email" type="text" placeholder="E-mail Address" spellcheck="false"/>
                </div>
                <div class="input-box">
                    <font-awesome-icon class="icon" :icon="['fas', 'message']"/>
                    <textarea name="message" cols="4" rows="4" style="resize: none;" placeholder="Message" spellcheck="false"></textarea>
                </div>
                <button type="submit">Send message</button>
            </form>
            <div class="contactInformation">
                <div class="methods">
                    <div class="method" v-for="method in methods">
                        <font-awesome-icon class="icon" :icon="[(method.Brand) ? 'fab' : 'fas', method.Icon]"/>
                        <a target="_blank" :href="(method.Mail) ? `mailto: ${method.Text}` : method.Link">{{ method.Text }}</a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import emailjs from '@emailjs/browser';
import {ref} from 'vue';

export default{
    name: "Contact",
    data() {
        return {
            methods: [
                { Icon: "at", Text: "contact@valentinmocanu.dev", Mail: true },
                { Icon: "instagram", Text: "eleleav", Brand: true, Link: "https://www.instagram.com/elelelav/"},
                { Icon: "linkedin", Text: "Valentin Mocanu", Brand: true, Link: "https://www.linkedin.com/in/valentin-mocanu-1b955a244/" },
                { Icon: "discord", Text: "valelele#3394", Brand: true, Link: "https://discordapp.com/users/337620156236955670" },
            ]
        }
    },
    methods: {
        // sendEmail() {
        //     emailjs.sendForm('service_jmseyrs', 'template_wash4cd', this.$refs.form, 'ugC0fJOGuQnJQTAqx')
        //     .then((result) => {
        //         console.log('SUCCESS!', result.text);
        //         this.$refs.form.reset();
        //     }, (error) => {
        //         console.log('FAILED...', error.text);
        //     });
        // }
    }
}
</script>
