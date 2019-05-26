import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <li>
        <form method="post" onSubmit={function(event) {
          event.preventDefault();
          const newTodo = event.target.new_todo.value;
          event.target.new_todo.value = "";
          this.props.onSubmit(newTodo);
        }.bind(this)}>
          <input type="text" name="new_todo" className="text"/>
          <input type="submit" className="submitBtn" value="추가"></input>
        </form>
      </li>
    );
  }
}

export default TodoForm;