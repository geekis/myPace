<template>
    <div class="flex justify-center justify-items-center w-screen h-16">
        <ul class="pl-0">
            <li class="inline-block p-4">
                <nuxt-link exact to="/">Home</nuxt-link>
            </li>
            <li class="inline-block p-4">
                <nuxt-link to="/pace-chart">Pace Chart</nuxt-link>
            </li>
            <li class="inline-block p-4">
                <nuxt-link to="/pace-converter">Pace Converter</nuxt-link>
            </li>
            <li class="inline-block p-4">
                <nuxt-link to="/pace-planer">Pace Planer</nuxt-link>
            </li>
            <li class="inline-block p-4">
                <nuxt-link to="/training-plans">Training Plans</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>