<template>
    <div>
        <div class="my-3" v-for="(score, index) in scores" :key="index">
            <div class="label">
                {{score.label}}
            </div>
            <div class="d-flex align-items-center">
                <div class="progress w-100" style="height: 12px" >
                    <div class="progress-bar progress__bar"
                         role="progressbar"
                         :style="`width:${getScorePercent(score.value)}%`"
                         aria-valuemin="0"
                         aria-valuemax="100">
                    </div>
                </div>
                <div class="score ml-3">{{score.value}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HotelDetailsRatingScore",
    data() {
        return {
            scores:[
                {label:'Amenities', value:4.2},
                {label:'Cleanliness', value:4.4},
                {label:'Comfort', value:4.4},
                {label:'Condition', value:4.4},
                {label:'Neighborhood', value:4.6},
                {label:'Overall', value:4.2},
                {label:'Service', value:4.3},
            ]
        }
    },
    methods: {
        getScorePercent(value) {
            return value * 100 / 5
        }
    }

}
</script>

<style scoped lang="scss">
    @import '@/styles/_variables.scss';
    .progress {
        background-color: #F8F8F8;
        &__bar {
            background-color: #C3D7F3;
        }
    }
    .label, .score {
        font-family: $theme-font-family;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 150%;
        color: #1E1C2A;
    }
</style>