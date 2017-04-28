import React from 'react';

export default class DayFour extends React.Component {
  constructor() {
    super();

    this.state = {
      currency: null,
      rates: []
    };
  }

  submit = (e) => {
    e.preventDefault();

    const url = `http://api.fixer.io/latest?base=${this.input.value}`;

    fetch(url).then((response) => {
      return response.json();
    }).then((rate) => {
      console.log(rate);
      this.setState({
        currency: rate.base,
        rates: rate.rates,
      })
    });
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
    // if (!this.state.rates) {
    //   return this.renderInstructions();
    // }

    // const requestedValue = document.querySelector('.currency').value;

    return (
      <div>

        <div className="form-container">
          <form onSubmit={(e) => this.submit(e)}>
            <div className="input-row">
              <input
                ref={input => this.input = input}
                type="text"
                className="currency"
              />
            </div>

            <div className="input-row">
              <button type='submit'>Rates</button>
            </div>
          </form>
        </div>

        <div className="results-container">
          <ul>
            {Object.keys(this.state.rates).map((key) => {
              return <li key={key}>Currency: {key} - {this.state.rates[key]}</li>;
            })}
          </ul>
        </div>

      </div>

    )
  }
}
