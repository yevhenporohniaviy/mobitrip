<template>
    <div class="category">
        <div class="label mb-3">
            <slot name="title"/>
        </div>
        <slot name="content"/>
    </div>
</template>

<script>
export default {
    name: "HotelDetailsCategories"
}
</script>

<style scoped lang="scss">
    @import '@/styles/_variables.scss';
    @import '@/styles/bootstrap_helpers.scss';
    .category {
        margin-top: 40px;
    }
    .label {
        font-family: $theme-font-family;
        font-style: normal;
        font-weight: 800;
        font-size: 18px;
        line-height: 150%;
        color: $black-howl;
    }

</style>