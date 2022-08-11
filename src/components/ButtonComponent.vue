<template>
    <b-button class="btn">
        {{text}}
    </b-button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: ['text']
}
</script>

<style scoped lang="scss">
    @import '@/styles/_variables.scss';
    .btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-family: $theme-font-family;
        font-style: normal;
        font-size: 16px;
        line-height: 150%;
        background: white;
        border: none;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        border-radius: 10px;
    }
</style>