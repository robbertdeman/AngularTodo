//hier moet je de modules importeren

export class TodoItem {
    constructor(public text: string, public completed: boolean) {

    }
}

@Component({
    selector: 'my-app',
})
@View({

})

export class AppComponent {
    todos: Array<TodoItem>;

    constructor() {
        this.todos = new Array<TodoItem>();
    }

    //functie maken die de item checked
    setCompleted(   ) {

    }

    //functie maken die de item removed
    removeTodo(   ) {

    }

    //functie maken die de kijkt of er op enter gedrukt is
    doneTyping(    ) {

    }

    //item aanmaken
    addTodo(    ) {

    }

    //functie die alle items checked
    completeAll() {

    }
}