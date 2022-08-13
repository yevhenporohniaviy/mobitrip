<template>
    <div class="slider">
        <b-container class="position-relative d-none d-md-block">
            <b-row>
                <div class="slider__gallery">
                    <b-icon class="mr-2" icon="image"/>
                    104+
                </div>
                <b-col cols="6" class="p-0">
                    <img class="img-fluid pr-3 slider__main-img" src="@/assets/images/Rectangle.png"/></b-col>
                <b-col cols="6" class="p-0">
                    <b-row>
                        <b-col cols="6" class="p-0"><img class="img-fluid pl-1" src="@/assets/images/Rectangle1.png"/></b-col>
                        <b-col cols="6" class="p-0"><img class="img-fluid pl-1" src="@/assets/images/Rectangle2.png"/></b-col>
                        <b-col cols="6" class="p-0"><img class="img-fluid pl-1 pt-1" src="@/assets/images/Rectangle3.png"/></b-col>
                        <b-col cols="6" class="p-0"><img class="img-fluid pl-1 pt-1" src="@/assets/images/Rectangle4.png"/></b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
        <div class="d-block d-md-none">
            <VueSlickCarousel :arrows="true" >
                <div><img class="img-fluid" src="@/assets/images/Rectangle.png"/></div>
                <div><img class="img-fluid" src="@/assets/images/Rectangle1.png"/></div>
                <div><img class="img-fluid" src="@/assets/images/Rectangle2.png"/></div>
                <div><img class="img-fluid" src="@/assets/images/Rectangle3.png"/></div>
                <div><img class="img-fluid" src="@/assets/images/Rectangle4.png"/></div>
            </VueSlickCarousel>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
    name: 'ImageCarousel',
    components: { VueSlickCarousel }
}
</script>
<style lang="scss">
    @import '@/styles/_variables.scss';
    .slider {
        .slick-prev, .slick-next {
            z-index: 1;
            width: 36px;
            height: 36px;
            background: #FFFFFF;
            opacity: 0.7;
            &:focus, &.active {
                background: #FFFFFF;
            }
            &:before {
                font-family: 'FontAwesome';

                font-size: 23px;
                color:$black-howl;
            }
        }
        .slick-prev {
            border-radius: 0px 5px 5px 0px;
            left: 0;
            &:before {
                content: '\f104';
            }
        }
        .slick-next {
            &:before {
                content: '\f105';
            }
            border-radius: 5px 0px 0px 5px;
            right: 0;
        }
    }
</style>
<style scoped lang="scss">
    @import '@/styles/_variables.scss';
    .slider {
        &__gallery {
            cursor: pointer;
            font-family: $theme-font-family;
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(4px);
            padding: 4px 9px;
            border-radius: 5px;
            z-index: 1;
            position: absolute;
            right: 0;
            bottom: 15px;
            font-style: normal;
            font-weight: 800;
            font-size: 14px;
            line-height: 150%;
            color: #1E1C2A;
        }
        &__main-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

</style>