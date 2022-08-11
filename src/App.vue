<template>
  <div id="app">
      <AppHeader/>
      <HotelDetails/>
      <AppFooter/>
  </div>
</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import HotelDetails from "@/components/HotelDetails";
export default {
  name: 'App',
    components: {HotelDetails, AppFooter, AppHeader}
}
</script>
