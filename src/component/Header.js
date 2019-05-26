import React, { Component } from 'react';

class Header extends Component {
  render() {
    let todoNow;
    if (this.props.todoNumber > 0) {
      todoNow = <h3>남은 일: {this.props.todoNumber}개</h3>;
    } else {
      todoNow = <h3>전부 완료했습니다!</h3>
    }
    return (
      <header>
        <h1>{this.props.title}</h1>
        {todoNow}
      </header>
    );
  }
}

export default Header;