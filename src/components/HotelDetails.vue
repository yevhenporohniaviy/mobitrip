<template>
    <section>
        <section class="navigation">
            <b-container fluid class="navigation__back">
                <b-row class="justify-content-start">
                    <b-container>
                        <b-row>
                            <a href="#" class="navigation__back__btn m-2 mx-sm-0 my-md-3">
                                <b-icon class="mr-2" font-scale="1.2" icon="arrow-left" aria-hidden="true"/>
                                See all hotels in Austin
                            </a>
                        </b-row>
                    </b-container>
                </b-row>
            </b-container>
            <b-container class="d-none d-md-block">
                <b-row>
                    <nav aria-label="breadcrumb">
                        <ol class="navigation__breadcrumbs breadcrumb p-0 my-2 ">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Texas</a></li>
                            <li class="breadcrumb-item"><a href="#">Austin </a></li>
                            <li class="breadcrumb-item active" aria-current="page">Hilton Austin</li>
                        </ol>
                    </nav>
                </b-row>
            </b-container>
        </section>
        <ImageCarousel class="mb-0 mb-md-5"/>
        <section class="hotel-info">
            <b-container>
                <b-row class="justify-content-between">
                    <b-col cols="12" md="7" class="p-2 p-md-0 mb-4">
                        <div class="hotel-info__price">
                            $ 253.00
                            <span>Per night</span>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="hotel-info__type">Hotel</div>
                            <b-form-rating class="hotel-info__rating" inline no-border v-model="rating" size="sm" disabled></b-form-rating>
                        </div>
                        <div class="hotel-info__title mb-2">
                            Hilton Austin
                        </div>
                        <div class="hotel-info__location mb-3">
                            500 E 4th St, Austin, TX 78701, United States
                        </div>
                        <div class="hotel-info__tags d-flex align-items-center flex-wrap mb-4">
                            <div class="hotel-info__tags__tag d-flex mr-2 my-1" v-for="(tag, index) in tags" :key="index">
                                {{tag}}
                            </div>
                        </div>
                        <hotel-details-categories>
                            <template v-slot:title>Property Description</template>
                            <template v-slot:content>
                                <div :class="{readLess:!readMore}" class="hotel-info__collapse hotel-info__collapse--truncate">
                                    {{ description }}
                                </div>
                                <div class="hotel-info__collapse__btn mt-3">
                                    <div @click="readMore = !readMore" >
                                        {{ readMore ? 'Read Less' : 'Read More'}}
                                        <b-icon class="ml-2" font-scale="0.9" :rotate="readMore ?180:0" icon="chevron-down"/>
                                    </div>
                                </div>
                            </template>
                        </hotel-details-categories>
                        <hotel-details-categories>
                            <template v-slot:title>Neighborhood</template>
                            <template v-slot:content>
                                <ul class="hotel-info__list">
                                    <li>Waller Creek District →271.4 yards (248.1 m)</li>
                                    <li>Downtown Austin →587.8 yards (537.5 m)</li>
                                </ul>
                            </template>
                        </hotel-details-categories>
                        <hotel-details-categories>
                            <template v-slot:title>Points of Interest</template>
                            <template v-slot:content>
                                <ul class="hotel-info__list">
                                    <li>Austin Visitor Center →135.1 yards (123.5 m)</li>
                                    <li>O. Henry House Museum →164.7 yards (150.6 m</li>
                                </ul>
                            </template>
                        </hotel-details-categories>
                        <hotel-details-categories>
                            <template v-slot:title>Nearby Airports</template>
                            <template v-slot:content>
                                <ul class="hotel-info__list">
                                    <li> AUS: Austin, TX (AUS-Austin-Bergstrom Intl.)→6.1 miles (9.7 km)</li>
                                </ul>
                            </template>
                        </hotel-details-categories>
                        <hotel-details-categories>
                            <template v-slot:title>
                                Facilities
                                <div class="hotel-info__sub-label">Top facilities</div>
                            </template>
                            <template v-slot:content>
                                <div :class="{readLess:!readMoreFacilities}" class="hotel-info__collapse hotel-info__collapse--truncate-points">
                                    <ul class="hotel-info__list hotel-info__list--columns">
                                        <li> <img class="img-fluid mr-2 my-1" src="@/assets/images/wifi-icon.svg"/>Wi-fi</li>
                                        <li> <img class="img-fluid mr-2 my-1" src="@/assets/images/parking-icon.svg"/>Car park</li>
                                        <li> <img class="img-fluid mr-2 my-1" src="@/assets/images/wifi-icon.svg"/>Wi-fi</li>
                                        <li> <img class="img-fluid mr-2 my-1" src="@/assets/images/time-icon.svg"/>24-hour reception</li>
                                        <li> <img class="img-fluid mr-2 my-1" src="@/assets/images/wheelchair-icon.svg"/>Wheelchair-accessible</li>
                                        <li> <img class="img-fluid mr-2 my-1" src="@/assets/images/ban-smoking-icon.svg"/>Non-smoking establishment</li>
                                        <li> <img class="img-fluid mr-2 my-1" src="@/assets/images/pets-icon.svg"/>Large pets allowed (over 5 kg)</li>
                                        <li> <img class="img-fluid mr-2 my-1" src="@/assets/images/breakfast-icon.svg"/>Breakfast</li>
                                    </ul>
                                </div>
                                <div class="hotel-info__collapse__btn mt-3">
                                    <div @click="readMoreFacilities = !readMoreFacilities" >
                                        {{ readMoreFacilities ? 'Hide all facilities and services' : 'Show all facilities and services'}}
                                        <b-icon class="ml-2" font-scale="0.9" :rotate="readMoreFacilities ?180:0" icon="chevron-down"/>
                                    </div>
                                </div>
                            </template>
                        </hotel-details-categories>
                    </b-col>
                    <b-col cols="12" md="4" class="p-2 p-md-0">
                        <hotel-details-categories class="m-0">
                            <template v-slot:title>
                                <div class="d-flex d-md-none flex-column">
                                    Location
                                    <span class="hotel-info__location">500 E 4th St, Austin, TX 78701, United States</span>
                                </div>
                            </template>
                            <template v-slot:content>
                                <img class="img-fluid" src="@/assets/images/example-map.png"/>
                            </template>
                        </hotel-details-categories>
                        <hotel-details-categories>
                            <template v-slot:title>
                                Ratings
                            </template>
                            <template v-slot:content>
                                <div class="d-flex align-items-center">
                                    <div class="hotel-info__rating-count mr-3 ">
                                        4.8
                                    </div>
                                    <div class="hotel-info__rating-vote">
                                        Very good <span class="mx-3">936 ratings</span>
                                    </div>
                                </div>
                            </template>
                        </hotel-details-categories>
                        <hotel-details-rating-score/>
                    </b-col>

                </b-row>
            </b-container>
        </section>
        <hotel-details-search/>
    </section>
</template>

<script>
import HotelDetailsCategories from "@/components/HotelDetailsCategories";
import ImageCarousel from "@/components/ImageCarousel";
import HotelDetailsSearch from "@/components/HotelDetailsSearch";
import HotelDetailsRatingScore from "@/components/HotelDetailsRatingScore";
export default {
  name: "HotelDetails",
    components: {HotelDetailsRatingScore, HotelDetailsSearch, HotelDetailsCategories, ImageCarousel},
    data() {
      return {
          description: 'Boasting a skylit indoor pool and 2 on-site dining options, this hotel is located across the ' +
              'street from Union Station. The eco-friendly property is adjacent from an airport express train to ' +
              'Toronto Pearson International Airport, 18 mi away. Lorem ipsum adem. Boasting a skylit indoor pool ' +
              'and 2 on-site dining options, this hotel is located across the street from Union Station. ' +
              'The eco-friendly property is adjacent from an airport express train to Toronto Pearson International ' +
              'Airport, 18 mi away. Lorem ipsum adem.',
          readMore: false,
          readMoreFacilities: false,
          rating: 5,
          tags: [
              'Hotels with spa',
              'Green Hotel',
              'Bussines hotels',
              'Sport hotels',
              'Waller Creek District',
              'Downtown Austin'
          ]
      }
    }
}
</script>

<style scoped lang="scss">
    @import '@/styles/_variables.scss';
    @import '@/styles/bootstrap_helpers.scss';
    .navigation {
        &__back {
            background: $fly-kite;
            border-radius: 0;
            &__btn {
                text-decoration: none;
                font-family: $theme-font-family;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 150%;
                color: $black-howl;
            }
        }
        &__breadcrumbs {
            background-color: transparent;
            .breadcrumb-item {
                color: $silk-crepe-mauve;
                &.active {
                    color: $theme-color;
                }
                a {
                    color: $silk-crepe-mauve;
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
    .hotel-info{
        &__rating-count {
            padding: 9px;
            background: #0064D3;
            border-radius: 5px;
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 150%;
            color: white;
        }
        &__rating-vote {
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 150%;
            text-align: right;
            color: $black-howl;
            span {
                font-weight: 600;
                font-size: 14px;
                line-height: 150%;
                color: $silk-crepe-mauve;
            }
        }
        &__sub-label {
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            color: $black-howl;
        }
        &__title {
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 800;
            font-size: 18px;
            line-height: 150%;
            color: $black-howl;
            @include media-breakpoint-up(md) {
                font-size: 32px;
            }
        }
        &__location {
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 150%;
            color: $silk-crepe-mauve;
            @include media-breakpoint-up(md) {
                font-size: 16px;
            }
        }
        &__price {
            position: absolute;
            top: 8px;
            right: 8px;
            display: flex;
            flex-direction: column;
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 800;
            font-size: 26px;
            text-align: right;
            color: $pestering-pesto;
            @include media-breakpoint-up(md) {
                font-size: 38px;
            }
            span {
                font-family: $theme-font-family;
                font-weight: 500;
                font-size: 12px;
                color: #6F7096;
                @include media-breakpoint-up(md) {
                    font-size: 16px;
                }
            }
        }

        &__list {
            list-style: disc;
            margin-left: 20px;
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            color: $silk-crepe-mauve;
            &--columns {
                list-style: none;
                columns: 2;
                -webkit-columns: 2;
                -moz-columns: 2;
            }
        }
        &__collapse {
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 150%;
            color: $silk-crepe-mauve;
            @include media-breakpoint-up(md) {
                font-size: 16px;
            }

            &__btn {
                cursor: pointer;
                font-family: $theme-font-family;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 150%;
                color: $theme-color;
            }
            &--truncate {
                &.readLess {

                    width:100%;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
            }
            &--truncate-points {
                &.readLess {
                    height: 75px;
                    overflow: hidden;
                }
            }

        }
        &__tags {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            max-width: 100%;
            @include media-breakpoint-up(sm) {
                max-width: 55%;
            }
            &__tag {
                font-family: $theme-font-family;
                font-style: normal;
                font-weight: 600;
                font-size: 10px;
                line-height: 150%;
                text-align: center;
                color: $silk-crepe-mauve;

                border: 1px solid #C3D7F3;
                border-radius: 5px;
                padding: 3px 8px;
            }
        }
        &__type {
            padding:1px 8px;
            background: #E8E9F3;
            border-radius: 5px;
            font-family: $theme-font-family;
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 150%;
            text-align: center;
            color: #3E3C49;
        }
        &__rating {
            &.disabled {
                background-color: transparent;
                color: #FF9F2F;
            }
        }
    }
</style>