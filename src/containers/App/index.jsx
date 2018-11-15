import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';

import './index.scss';

@observer
class App extends React.Component {
  render() {
    const {
      title,
    } = this.props;

    return (
      <div className="dv-app">
        <div className="dv-app__controls">
          <h1 className="dv-app__controls--center">{title}</h1>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropType.string.isRequired,
};

export default App;
