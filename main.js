//shared event instance that allows for sibling componenets to communicte

window.Event = new Vue(); 

Vue.component('coupon', {
    template: '<input placeholder="Enter your coupon code" @blur="couponApplied">',

    methods: {
        couponApplied() {
            Event.$emit('applied');
        }
    }
})

new Vue({
    el: '#root',

    data: {
        couponApplied: false
    },

    created() {
        Event.$on('applied', () => alert('Handling it!'));
    }
});

Vue.config.debug = true; 
Vue.config.devtools = true;