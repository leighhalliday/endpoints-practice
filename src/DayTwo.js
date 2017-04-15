import React from 'react';

export default class DayTwo extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    // fetch data here
  }

  renderInstructions() {
    return (
      <div>
        <h1>Day 2</h1>
        <p>
          <strong>Your task:</strong>
          Fetch the data located at this endpoint:
          https://api.github.com/users/marianserna
          <br/>
          Load the data and place all of the GitHub user data into the state "user" property.
          Then
          <br/>
        </p>

        <h3>Tips</h3>
        <ul>
          <li>Do this in 3 steps. First get the data using fetch and log it to console.</li>
          <li>Then put the user data into the state and inspect it using react dev tools.</li>
          <li>Last display the pieces of info requested below in the render function.</li>
        </ul>
      </div>
    );
  }

  render() {
    if (!this.state.user) {
      return this.renderInstructions();
    }

    return (
      <div>
        <h2>NAME</h2>
        <img src="http://lorempixel.com/200/200/"/>
        <p>BIO</p>
        <a href="#">Visit Page</a>
      </div>
    )
  }
}
