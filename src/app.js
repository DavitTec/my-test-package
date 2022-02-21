import React from 'react';

import * as My from './components/my-components.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <My.Foo />
        <My.Bar />
      </div>
    );
  }
}
