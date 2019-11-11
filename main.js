Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="couponApplied">',

    methods: {
        couponApplied() {
            this.$emit('applied');
        }
    }
})

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});

Vue.config.debug = true; 
Vue.config.devtools = true;