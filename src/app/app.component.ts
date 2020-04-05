import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Todos';
  todoList: any [] = [];

  ngOnInit() {
    this.todoList = [
      // example of how to make an item in todo list
      { title: 'Install Angular CLI', isDone: false }
    
    ];
  }
}