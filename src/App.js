import React, { Component, PropTypes } from 'react';

const data = '!!!';

class App extends Component {
  render () {
    return (
      <div>
        <h1> Hello world {this.props.txt}</h1>
        <strong>stronger!! {this.props.cat}</strong>
      </div>
    );
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: "this default text",
  cat: 1
};

export default App;
