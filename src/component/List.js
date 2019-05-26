import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import EditTodo from "./EditTodo";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editingTodo: 0
    };
  }

  render() {
    const todoList = [];
    this.props.todos.forEach(todo => {
      if (this.state.edit && Number(this.state.editingTodo) === todo.id) {
        todoList.push(
          <EditTodo
            key={todo.id}
            description={todo.description}
            id={todo.id}
            sendEdit={(id, description) => {
              this.props.editTodo(id, description);
              this.setState({
                edit: false,
              })
            }}
          />
        );
      } else {
        todoList.push(
          <Todo
            key={todo.id}
            id={todo.id}
            description={todo.description}
            sendDelete={(id, checked) => {
              this.props.deleteTodo(id, checked);
            }}
            changeLeft={minus => {
              if (minus) {
                this.props.changeLeft(true);
              } else {
                this.props.changeLeft(false);
              }
            }}
            editMode={id => {
              this.setState({
                edit: true,
                editingTodo: id
              });
            }}
          />
        );
      }
    });

    return (
      <ul>
        {todoList}
        <TodoForm
          onSubmit={newTodo => {
            this.props.createTodo(newTodo);
          }}
        />
      </ul>
    );
  }
}

export default List;
