import React from 'react';

export default class DayFive extends React.Component {
  constructor() {
    super();

    this.state = {
      weather: null
    };
  }

  componentWillMount() {
    // fetch data here
  }

  renderInstructions() {
    return (
      <div>
        <h1>Day 5</h1>
        <p>
          <strong>Your task:</strong>
          Fetch the data located at this endpoint:
          https://api.darksky.net/forecast/f0040393476d8e4b6449dc162be2c30a/37.8267,-122.4233
          <br/>
          You can put the fetch statement inside of the componentWillMount func
          which is already created. The last part of the URL is the latitude and longitude for the weather lookup.
          <br/>
          Get the user's lat/lon using the geolocation API, and once you have that make a request to get the
          weather data for their location. Show data from the "Current" section of the response that you think is interesting.
          <br/>
          For a bonus challenge, try showing the "daily" weather... it contains information for every day for the next week.
        </p>
      </div>
    );
  }

  render() {
    if (!this.state.weather) {
      return this.renderInstructions();
    }

    return (
      <div>
        Weather Info Goes Here
      </div>
    )
  }
}
