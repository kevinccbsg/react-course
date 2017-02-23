import React, { Component, PropTypes } from 'react';

const data = '!!!';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: 'this is the state txt'
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      txt: e.target.value
    });
  }

  render () {
    return (
      <div>
        <Widget update={this.update} />
        <h1> Hello world {this.props.txt} - {this.state.txt}</h1>
        <strong>stronger!! {this.props.cat}</strong>
      </div>
    );
  }
}

const Widget = (props) => {
  return <input type="text" onChange={props.update} />;
}

export default App;
