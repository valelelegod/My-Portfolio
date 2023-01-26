<template>
    <div id="projectsView" class="projects">
        <h2>Work</h2>
        <h3>My current projects</h3>
        <!-- <div class="group">
            <div class="testimonial" v-for="test in testimonials">
                <h1 class="name">{{ test.Name }}</h1>
                <h2>{{ test.Rank }}</h2>
                <h1 class="description">{{ test.Text }}</h1>

                <div class="appreciation">
                    <font-awesome-icon v-for="star in test.Stars" class="icon" :icon="['fas', 'star']" v-bind="star"/>
                    <font-awesome-icon v-for="star in 5-test.Stars" class="icon muted" :icon="['fas', 'star']" v-bind="star"/>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>