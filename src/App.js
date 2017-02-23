import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const data = '!!!';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], loading: true, filter: '' };
    this.filter = this.filter.bind(this);
  }
  componentWillMount() {
    fetch('http://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then((data) => this.setState({ items: data.results, loading: false }));
  }
  filter(e) {
    this.setState({ filter: e.target.value });
  }
  render () {
    let items = this.state.items;
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.filter) {
      items = items.filter(item => {
        return item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase());
      });
    }
    return (
      <div>{this.state.filter}
        <input type="text" onChange={this.filter} />
        {items.map(item => <Person key={item.name} person={item} />)}
      </div>
    );
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

class Input extends Component {
  render() {
    return <input value={this.props.valueComponent} ref="input" type="text" onChange={this.props.update} />;
  }
}

const Loading = () => <p>Loading.....</p>;

const Button = (props) => {
  return <button onClick={props.click}>{props.children}</button>;
}

export default App;
