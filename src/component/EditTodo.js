import React, { Component } from "react";

class EditTodo extends Component {
  render() {
    return (
      <li>
        <form
          method="post"
          onSubmit={function(event) {
            event.preventDefault();
            this.props.sendEdit(+event.target.dataset.id, event.target.todo.value);
          }.bind(this)}
          data-id={this.props.id}
        >
          <input type="text" name="todo" defaultValue={this.props.description} className="text" />
          <input type="submit" className="submitBtn" value="수정" />
        </form>
      </li>
    );
  }
}

export default EditTodo;
