<template>
    <b-navbar toggleable="md" type="dark" class="header">
        <b-container class="px-0 my-md-3">
            <b-navbar-brand href="#">
                <img class="img-fluid header__logo" src="@/assets/images/mobytrip.svg"/>
            </b-navbar-brand>

            <b-navbar-toggle class="header__btn-collapse" target="nav-collapse">
                <img class="img-fluid" src="@/assets/images/menu-icon.svg"/>
            </b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="header__collapsed-nav" >
                    <div class="header__currency">
                        <b-form-select
                            class="header__currency__select "
                            v-model="selected"
                            :options="options"
                            value-field="value"
                            text-field="text"
                            size="sm"/>
                    </div>
                    <button class="btn--login">
                        Log In
                    </button>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
export default {
    name: "AppHeader",
    data() {
        return {
            selected: 'usd',
            options: [
                { value: 'usd', text: 'USD' },
                { value: 'uah', text: 'UAH' },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    @import '@/styles/_variables.scss';
    @import '@/styles/bootstrap_helpers.scss';
    .header {
        background-color: $theme-color;
        &__logo {
            @include media-breakpoint-down(sm) {
                max-height: 25px;
            }
        }
        &__collapsed-nav {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            @include media-breakpoint-up(md) {
                justify-content: end;
            }
        }
        &__currency {
            margin-right: 40px;
            &__select {
                cursor: pointer;
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                padding-left: 1.14rem;
                background: rgba(255, 255, 255, 0.15)
                    url('@/assets/images/caret-select-icon.svg') right 0.75rem center/10px no-repeat;
                border-radius: 8px;
                color: white;
                border: none;
            }
        }
        &__btn-collapse {
            border: none;
        }
    }
    .btn {
        &--login {
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

            padding: 5px 28px;
            color: $theme-color;
            font-weight: 600;
            transition: all .1s ease-in-out;
            &:hover {
                color: $box-office;
                background-color: $delicate-viola;
            }
            @include media-breakpoint-up(md) {
                padding: 9px 41px;
            }
        }
    }
</style>