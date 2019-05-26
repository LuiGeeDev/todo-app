import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import List from "./component/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastId: 4,
      todos: [
        { id: 1, description: "React 공부" },
        { id: 2, description: "JavaScript 공부" },
        { id: 3, description: "Spring 공부" },
        { id: 4, description: "놀기" }
      ],
      todoLeft: 4
    };
  }

  componentDidMount() {
    const checkboxes = [...document.getElementsByClassName("checkbox")];
    let count = 0;
    checkboxes.forEach((checkbox) => {
      if (!checkbox.checked) {
        count += 1;
      }
    });
    this.setState({ count })
  }

  render() {
    return (
      <div className="App">
        <Header title="React To-Do List" todoNumber={this.state.count} />
        <List
          todos={this.state.todos}
          createTodo={function(description) {
            const todos = Array.from(this.state.todos);
            const id = this.state.lastId + 1;
            const count = this.state.count + 1;
            todos.push({ id, description });
            this.setState({
              lastId: id,
              todos,
              count
            });
          }.bind(this)}
          deleteTodo={function(id, checked) {
            if (window.confirm("삭제하시겠습니까?")) {
              const todos = this.state.todos.filter(function(todo) {
                return todo.id !== Number(id);
              });
              let count;
              if (checked) {
                count = this.state.count;
              } else {
                count = this.state.count - 1;
              }
              this.setState({ todos, count });
            }
          }.bind(this)}
          changeLeft={(minus) => {
            let count = this.state.count;
            if (minus) {
              count -= 1;
            } else {
              count += 1;
            }
            this.setState({ count });
          }}
          editTodo={(id, description) => {
            const todos = Array.from(this.state.todos);
            for (const todo of todos) {
              if (todo.id === id) {
                todo.description = description;
                break;
              }
            }
            this.setState({ todos });
          }}
        />
      </div>
    );
  }
}

export default App;
