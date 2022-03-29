console.log('js ok');
const todoList = [
    {
        text: 'Studiare',
        done: false
    },
    {
        text: 'Pulire casa',
        done: false
    },
    {
        text: 'Portare fuori Nala',
        done: false
    },
    {
        text: 'Preparare il pranzo',
        done: false
    }
];


console.log(todoList);
const app = new Vue({
    el: '#root',
    data: {
        todoList,
        doneList: [],
        newTodo: '',
        textNewTodo:
        {
            text: '',
            done: false
        }
    },
    methods: {
        changeStatusTask(item) {

            // item['done'] = true;
            item.done = !item.done;
            console.log('ho cliccato');
            console.log(item);
        },

        ifDone(item) {

            if (!item.done) {
                return 'to-do red rounded-pill';
            } else {
                return 'to-do green line-through rounded-pill';
            }
        },
        addDoneList(index) {
            this.doneList.push(index);

            // doneList = this.doneList;
        },
        addNew() {

            if (this.newTodo.length > 0) {

                this.todoList.push(this.textNewTodo);
                this.textNewTodo.text = this.newTodo;
                this.newTodo = ''
            }

        },
    }
})