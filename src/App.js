import React, { Component, PropTypes } from 'react';

const data = '!!!';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('clicked');
  }

  render () {
    return (
      <Button click={this.handleClick}>React</Button>
    );
  }
}

const Button = (props) => {
  return <button onClick={props.click}>{props.children}</button>;
}

export default App;
