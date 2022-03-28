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
        doneList: [],
        newTodo: '',
        textNewTodo:
        {
            text: '',
            done: false
        }
    },
    methods: {
        deleteTask(item) {

            if (item['done'] = true) {
                console.log('ho cliccato');
                console.log(item);
            }


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

            doneList = this.doneList;
        },
        addNew() {
            this.textNewTodo.text = this.newtodo;
            if (this.newTodo.length > 0) {
                this.todoList.push(this.textNewTodo);

                this.newTodo = ''
            }
        },
        // reAddTask(item) {
        //     item['done'] = true
        //     this.todoList.push(this.item);
        // }
    }
})