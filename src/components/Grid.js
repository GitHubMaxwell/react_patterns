import React, { Component, Fragment } from 'react';
import GridItem from './GridItem';

export default class Home extends Component {
  constructor() {
    this.state = {
      list: []
    };
  }
  componentWillMount() {
    // pull data from json and populate the this.state.list with it
  }
  render() {
    return (
      <Fragment>
        <h1>Hot Sauce List</h1>
        <ul>
          {this.state.list.map(ele => {
            return <GridItem title={ele} />;
          })}
        </ul>
      </Fragment>
    );
  }
}
