var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  // Updated .displayTodos to: show you the text of todo, tell you if .todos is empty, and 
  // shows you if the task has been completed
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
         if (this.todos[i].completed === true) {
          console.log('(x)', this.todos[i].todoText);
         } else {
            console.log('( )', this.todos[i].todoText);
         }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // Get number of completed Todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // Case 2: If everything is true, make everything false
    if (completedTodos === totalTodos) {
      // Make everything false
      for (var i = 0; i < totalTodos; i++) {
       this.todos[i].completed = false; 
      }
    // Case 2: Otherwise, make everything true  
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// We want to get access to the display todos button.
var displayTodosButton = document.getElementById('displayTodosButton');

// Get access to the toggle all button.
var toggleAllButton = document.getElementById('toggleAllButton');

// We want to run the display todos method when someone clicks the display
// todos button
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

// We want to run the toggle all method when someone clicks the toggle all
// buton
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});







