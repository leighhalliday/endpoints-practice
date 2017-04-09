import React from 'react';

export default class DaySeven extends React.Component {
  constructor() {
    super();

    this.state = {
      beer: null
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
          http://api.react.beer/v2/beer/HMJR8Y
          <br/>
          You can put the fetch statement inside of the componentWillMount func
          which is already created. For this exercise, all you need to do is set the beer
          in the state. If done correctly the beer will renderered by this component.
          <br/>
        </p>

        <h3>Tips</h3>
        <ul>
          <li>Try first viewing the data that the endpoint responds with in your browser.</li>
          <li>Get comfortable with the format of the data... know where the "beer" lives inside of the response.</li>
          <li>Use console.log() as much as possible to see what is happening.</li>
        </ul>
      </div>
    );
  }

  render() {
    if (!this.state.beer) {
      return this.renderInstructions();
    }

    return (
      <div>
        {JSON.stringify(this.state.beer)}
      </div>
    )
  }
}
