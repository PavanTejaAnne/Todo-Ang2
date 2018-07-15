import { Component } from "@angular/core";

@Component({
  selector: "todos",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  newTodo: string;
  todos: any;
  listObject: any;

  constructor() {
    this.newTodo = " ";
    this.todos = [];
  }

  addTodo(event) {
    this.listObject = {
      newTodo: this.newTodo,
      completed: false
    };
    this.todos.push(this.listObject);
    this.newTodo = " ";
  }

  deleteSelectedTodos() {
    for (var i = this.todos.length - 1; i > -1; i--) {
      if (this.todos[i].completed) {
        this.todos.splice(i, 1);
      }
    }
  }
}
