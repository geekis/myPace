<template>
  <div>
    <app-nav/>
    <pace/>
  </div>
</template>

<script>
import AppNav from '~/components/AppNav.vue';
import Pace from '~/components/Pace.vue';

export default {
  components: {
    AppNav,Pace
  },
};
</script>
