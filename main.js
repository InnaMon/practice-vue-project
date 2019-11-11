Vue.component('task', {

    template: '<li><slot></slot></li>'

});

//abouve code creates a global component 

new Vue({
    el: '#root'
})