import React from 'react';

export default class DayFour extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: null,
      rates: null
    };
  }

  renderInstructions() {
    return (
      <div>
        <h1>Day 4</h1>
        <p>
          <strong>Your task:</strong>
          Create a form with 1 input called "currency" and a button that submits the form which
          says "Rates!". The user will enter USD or CAD or EUR into the currency field and then
          submit the form to see the rates for that currency.
          <br/>
          When the form submits, you will grab the value the user entered, and use it to make a
          fetch request to the following URL: http://api.fixer.io/latest?base=CAD
          The "base" property is replaced with whatever value comes from the form.
          <br/>
          The response has an object of "rates" (you can view it in browser to see what it looks like).
          I want you to create a UL where each LI has CURRENCY: VALUE. Remember it is an object not an
          array so you'll need to map the keys of the object and then access the value for that key inside
          of the map. We did this for the chat in xoxo for an example.
        </p>
      </div>
    );
  }

  render() {
    if (!this.state.rates) {
      return this.renderInstructions();
    }

    return (
      <div>
        <div className="form-container">FORM HERE</div>
        <div className="results-container">RESULTS HERE</div>
      </div>
    )
  }
}
