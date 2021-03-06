import React from 'react';

export class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onChange('Darth Vader');
  }

  render() {
    return (
      <button data-testid="button-fetch-dark-side" onClick={this.handleClick}>The dark side of the force</button>
    );
  }
}
