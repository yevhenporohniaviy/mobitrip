<template>
    <section class="navigation">
        <b-container fluid class="navigation__back">
            <b-row class="justify-content-start">
                <b-container>
                    <b-row>
                        <div class="navigation__back__btn">
                            <b-icon icon="arrow-left" aria-hidden="true"/>
                            See all hotels in Austin
                        </div>
                    </b-row>
                </b-container>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <nav aria-label="breadcrumb">
                    <ol class="navigation__breadcrumbs breadcrumb p-0">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Texas</a></li>
                        <li class="breadcrumb-item"><a href="#">Austin </a></li>
                        <li class="breadcrumb-item active" aria-current="page">Hilton Austin</li>
                    </ol>
                </nav>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
  name: "HotelDetails"
}
</script>

<style scoped lang="scss">
    @import '@/styles/_variables.scss';
    .navigation {
        &__back {
            background: #C3D7F3;
            border-radius: 0px;
        }
        &__breadcrumbs {
            background-color: transparent;
            .breadcrumb-item {
                color: $gray-text;
                &.active {
                    color: $theme-color;
                }
                a {
                    color: $gray-text;
                }
                &:first-child {
                    &:before {
                        content: none;
                    }
                }
                &:before {
                    font-family: 'FontAwesome';
                    content: '\f105';
                }
            }
        }
    }
</style>