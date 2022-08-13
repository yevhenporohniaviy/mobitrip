<template>
    <section class="search">
        <b-container>
            <b-row>
                <div class="search__title mx-3">Your search</div>
                <b-col cols="12" class="p-2 p-md-0 mb-4">
                    <div class="d-flex align-items-center flex-column flex-md-row">
                        <div class="calendar d-flex align-items-center mb-3 w-100">
                            <div class="calendar__icon"><b-icon icon="calendar2" scale="1.2"></b-icon></div>
                            <div class="d-flex flex-column calendar__text">
                                <div>Check In - Check out</div>
                                <span>May 2 - May 3</span>
                            </div>
                        </div>
                        <div class="options d-flex align-items-center mb-3 mx-3 w-100" >
                            <div class="options__icon"><b-icon icon="person" scale="1.5"></b-icon></div>
                            <div class="d-flex flex-column options__text">
                                <div>Rooms and guests</div>
                                <span>1 room, 2 travelers</span>
                            </div>
                        </div>
                        <div class="update-btn d-flex align-items-center mb-3 w-100">
                            Update Rooms
                        </div>
                    </div>
                </b-col>
                <div class="d-block d-md-none search__title mx-3 mt-4">Choose your room</div>
                <b-col cols="12" class="p-2 p-md-0 mb-3" v-for="(hotel, index) in 2" :key="index">
                    <b-card no-body class="overflow-hidden hotel-card">
                        <b-row no-gutters class="p-3 p-md-0">
                            <b-col cols="2" md="3">
                                <img class="hotel-card__image img-fluid" src="@/assets/images/example-card--img.png" alt="Image"/>
                            </b-col>
                            <b-col cols="10" md="9">
                                <b-card-body class="pt-0  px-2 p-md-4 ">
                                    <div class="d-flex flex-row justify-content-between">
                                        <div class="d-flex flex-column">
                                            <div class="hotel-card__title mb-2">1 King Bed Hearing Accessible</div>
                                            <div class="d-flex align-items-center">
                                                <div class="d-flex align-items-center mr-3">
                                                    <img src="@/assets/images/person-icon.svg" class="img-fluid mr-1"/>2
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <img src="@/assets/images/baby-icon.svg" class="img-fluid mr-1"/>0
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <div class="d-flex flex-column hotel-card__price md-2 mb-md-3">

                                                $ 1253.00 <span>per night</span></div>
                                            <div class="d-flex flex-column hotel-card__taxes">
                                                $ 320.69 <span>(including taxes)</span></div>
                                        </div>
                                    </div>

                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    name: "HotelDetailsSearch",
    data() {
        return {
            hotels: [

            ]
        }
    }
}
</script>

<style scoped lang="scss">
    @import '@/styles/_variables.scss';
    @import '@/styles/bootstrap_helpers.scss';

    .search {
        background-color: $silver-phoenix;
        &__title {
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 800;
            font-size: 26px;
            line-height: 150%;
            color: $black-howl;
            margin-top: 60px;
            margin-bottom: 20px;
        }
    }
    .update-btn {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background: $theme-color;
        border-radius: 10px;
        color: white;
        height: 60px;
        transition: all .1s ease-in-out;
        &:hover {
            color: $box-office;
            background-color: $delicate-viola;
        }
    }
    .calendar, .options  {
        font-family: $theme-font-family;
        background: white;
        border-radius: 10px;
        padding: 8px 20px;
        &__icon {
            color: $fly-kite;
            margin-right: 15px;
        }
        &__text {
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            color: $silk-crepe-mauve;
            span {
                font-size: 16px;
                color: $black-howl;
            }
        }
    }
    .hotel-card{
        font-family: $theme-font-family;
        background: #FFFFFF;
        font-style: normal;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        border-radius: 12px;
        &__reserve {
            font-weight: 600;
            font-size: 12px;
            line-height: 150%;
            border-radius: 8px;
            padding: 2px 5px;
            @include media-breakpoint-up(md) {
                font-size: 16px;
            }
            &--on {
                color: $pestering-pesto;
                background: rgba(19, 154, 28, 0.1);
            }
            &--off {
                color: $silk-crepe-mauve;
                background-color: $silver-phoenix;
            }
            span {
                font-weight: 500;
                font-size: 12px;
                @include media-breakpoint-up(md) {
                    font-size: 14px;
                }
            }


        }
        &__taxes {
            font-style: normal;
            font-weight: 800;
            font-size: 12px;
            line-height: 150%;
            text-align: right;
            color: $black-howl;
            @include media-breakpoint-up(md) {
                font-size: 18px;
            }
            span {
                font-weight: 400;
                color: $smoky;
                font-size: 12px;
                @include media-breakpoint-up(md) {
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
        &__price {
            font-style: normal;
            font-weight: 800;
            font-size: 17px;
            text-align: right;
            color: $pestering-pesto;

            @include media-breakpoint-up(md) {
                font-size: 32px;
            }
            span {
                font-weight: 400;
                color: $smoky;
                font-size: 12px;
                @include media-breakpoint-up(md) {
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
        &__image {
            border-radius: 6px;
            @include media-breakpoint-up(md) {
                border-radius: 12px;
            }
        }
        &__title{
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 150%;
            color: $black-howl;
            @include media-breakpoint-up(md) {
                font-size: 22px;
                font-weight: 800;
            }

        }
    }
</style>