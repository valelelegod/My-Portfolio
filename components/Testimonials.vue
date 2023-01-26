<template>
    <div id="testimonialsView" class="testimonials">
        <h2>Testimonials</h2>
        <h3>What people think about me</h3>
        <div class="group">
            <div class="testimonial" v-for="test in testimonials">
                <h1 class="name">{{ test.Name }}</h1>
                <h2>{{ test.Rank }}</h2>
                <h1 class="description">{{ test.Text }}</h1>

                <div class="appreciation">
                    <font-awesome-icon v-for="star in test.Stars" class="icon" :icon="['fas', 'star']" v-bind="star"/>
                    <font-awesome-icon v-for="star in 5-test.Stars" class="icon muted" :icon="['fas', 'star']" v-bind="star"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
                { Name: "Petru Marin", Rank: "Full Stack Developer", Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor porta dui vitae ornare. Etiam semper, eros at malesuada gravida, mi purus convallis eros, sit amet accumsan turpis est vitae nisl.", Stars: 5},
                { Name: "Pavel Marin", Rank: "Full Stack Developer", Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor porta dui vitae ornare. Etiam semper, eros at malesuada gravida, mi purus convallis eros, sit amet accumsan turpis est vitae nisl.", Stars: 1},
                { Name: "Rozian Pop", Rank: "Full Stack Developer", Text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor porta dui vitae ornare. Etiam semper, eros at malesuada gravida, mi purus convallis eros, sit amet accumsan turpis est vitae nisl.", Stars: 0},
            ]
        }
    }
}
</script>