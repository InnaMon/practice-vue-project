//abouve code creates a global component 

//descibes what a task list outputs 

Vue.component('task-list', {

    template: `<div>
                    <task v-for="task in tasks">{{ task.task }}</task>
                </div>`,

    data() {
        return {
            tasks: [
                { task: 'Go to the store', complete: false},
                { task: 'Go to the bank', complete: false},
                { task: 'Go to work', complete: true}
            ]
        }
    }

});

//describes what a task outputs 

Vue.component('task', {

    template: '<li><slot></slot></li>'

});




new Vue({
    el: '#root'
})