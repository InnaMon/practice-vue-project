Vue.component('progress-view', {

    data() {
        return { completionRate: 50};
    }

});

new Vue({
    el: '#root'
});

Vue.config.debug = true; 
Vue.config.devtools = true;