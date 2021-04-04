<template>
    <div>
        <app-nav/>
        <h1>Pace Chart</h1>
        <Pace/>
    </div>
</template>

<script>
    import Pace from '~/components/Pace.vue';
    import AppNav from '~/components/AppNav.vue';
    
    export default {
        components: {
            Pace, AppNav
    
        },
    };
</script>

<style lang="scss" scoped>

</style>
