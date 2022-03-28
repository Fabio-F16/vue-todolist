console.log('js ok');
const todoList = [
    {
        text: 'Studiare',
        done: false
    },
    {
        text: 'pulire casa',
        done: false
    },
    {
        text: 'portare fuori Nala',
        done: false
    },
    {
        text: 'preparare il pranzo',
        done: false
    }
];


console.log(todoList);
const app = new Vue({
    el: '#root',
    data: {
        todoList,
        donelist: [],


    },
    methods: {
        change(item) {
            item['done'] = true;
            console.log('ho cliccato');
            console.log(item);
        },

        ifDone(item) {

            if (!item.done) {
                return 'to-do';
            } else {
                return 'to-do line-through';
            }
        },

    }

})