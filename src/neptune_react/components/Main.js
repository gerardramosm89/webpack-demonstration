import React, { Component } from 'react';
import { connect } from 'react-redux';

import { incrementCounter, decrementCounter} from '../actions';

class Main extends Component {
  componentDidMount() {
    // console.log(this.props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Hello from react</h1>
        <button onClick={() => this.props.incrementCounter()}>Increment Counter</button>
        <button onClick={() => this.props.decrementCounter()}> Decrement Counter</button>
        <h2>Counter: {this.props.counter}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps, { incrementCounter, decrementCounter})(Main);
