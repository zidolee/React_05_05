import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getUser } from './redux/userReducer'

class App extends Component {
  static defaultProps = {
    name: "default name",
    age: 0,
    address: "default address"
  }
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    const { name, age, address, isLoading } = this.props;
    if(isLoading) {
      return <div>Loading</div>
    }
    return (
      <div>
        <h1>
          {name}
        </h1>
        <div>
          {age}
        </div>
        <div>
          {address}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    age: state.user.age,
    address: state.user.address,
    isLoading: state.user.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
