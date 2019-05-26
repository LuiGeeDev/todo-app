import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          className="checkbox"
          id={this.props.id}
          onChange={event => {
            if (event.target.checked) {
              this.props.changeLeft(true);
            } else {
              this.props.changeLeft(false);
            }
          }}
        />
        <label htmlFor={this.props.id}>
          <i className="far fa-check-circle" />
          <span className="description">{this.props.description}</span>
        </label>
        <button
          className="edit-btn"
          data-id={this.props.id}
          onClick={event => {
            this.props.editMode(event.target.dataset.id);
          }}
        >
          <i className="fas fa-exchange-alt" />
        </button>
        <button
          className="delete-btn"
          data-id={this.props.id}
          onClick={event => {
            const checked = event.target.parentNode.children[0].checked;
            this.props.sendDelete(event.target.dataset.id, checked);
          }}
        >
          <i className="far fa-trash-alt" />
        </button>
      </li>
    );
  }
}

export default Todo;
