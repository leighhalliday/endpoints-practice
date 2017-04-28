import React from 'react';

export default class DayTwo extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    const url = 'https://api.github.com/users/marianserna';

    fetch(url).then((response) => {
      return response.json();
    }).then((user) => {
      this.setState({
        user: user
      });
    })
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
        <h2>{this.state.user.name}</h2>
        <img src={this.state.user.avatar_url}/>
        <p>{this.state.user.bio}</p>
        <a href={this.state.user.html_url}>Visit Page</a>
      </div>
    )
  }
}
