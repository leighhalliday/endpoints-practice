import React from 'react';

export default class DayThree extends React.Component {
  constructor() {
    super();

    this.state = {
      loaded: false,
      repos: []
    };
  }

  componentWillMount() {
    const url = 'https://api.github.com/users/marianserna/repos';

    fetch(url).then((response) => {
      return response.json();
    }).then((repos) => {
      this.setState({
        loaded: true,
        repos: repos
      });
    })
  }

  renderInstructions() {
    return (
      <div>
        <h1>Day 3</h1>
        <p>
          <strong>Your task:</strong>
          Fetch the data located at this endpoint:
          https://api.github.com/users/marianserna/repos
          <br/>
          This endpoint returns an array of repos. After fetching them, please set the
          repos in the state and also set the "loaded" property of the state to true.
          <br/>
        </p>
      </div>
    );
  }

  render() {
    if (!this.state.loaded) {
      return this.renderInstructions();
    }

    return (
      <div>
        <h2>Marian's Repos</h2>
        <ul>
          {this.state.repos.map((repo) => {
            return <li key={repo.id}>{repo.html_url}, name: {repo.name}</li>;
          })}
        </ul>
      </div>
    )
  }
}
