import React, { Component, PropTypes } from 'react';

const data = '!!!';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { a: '', b: ''};
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({
      a: this.a.refs.input.value,
      b: this.b.value,
    });
  }
  handleClick() {
    alert('clicked');
  }
  render () {
    return (
      <div>
        <Input 
          ref={ component => this.a = component }
          update={this.update}
        /> {this.state.a}
        <input 
          ref={ node => this.b = node }
          type="text"
          onChange={this.update}
        /> {this.state.b}
      </div>
    );
  }
}

class Input extends Component {
  render() {
    return <input ref="input" type="text" onChange={this.props.update} />;
  }
}

const Button = (props) => {
  return <button onClick={props.click}>{props.children}</button>;
}

export default App;
