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
                    <ButtonComponent class="btn--login" :text="'Log in'"/>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";
export default {
    name: "AppHeader",
    components: {ButtonComponent},
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
            padding: 5px 28px;
            color: $theme-color;
            font-weight: 600;
            @include media-breakpoint-up(md) {
                padding: 9px 41px;
            }
        }
    }
</style>