import React from 'react';
import Main from './src/Main'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      other: false,
    }
  }

  render() {
    return (
      <Main />
    );
  }
}

