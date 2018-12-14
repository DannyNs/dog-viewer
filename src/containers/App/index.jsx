import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import { DogsStore } from '../../stores/DogsStore';
import Loader from '../../components/Loader';
import DogImage from '../../components/DogImage';
import ErrorsBoard from '../../components/ErrorsBoard';

import './index.scss';

@observer
class App extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { dogsStore } = this.props;
    const toBottom = window.innerHeight + document.documentElement.scrollTop + 100;
    const height = document.documentElement.offsetHeight;

    if ((toBottom > height)) {
      dogsStore.fetchDogs(20);
    }
  }

  render() {
    const {
      dogsStore: {
        dogs, loading, errors, showError,
      },
    } = this.props;
    const keys = Object.keys(dogs);

    return (
      <div className="dv-app">
        <ErrorsBoard errors={errors} />
        {
          loading && <Loader />
        }
        <div className="dv-app__container">
          {
            keys
              .map((key) => {
                const dog = dogs[key];

                return <DogImage key={dog.id} showError={showError} dog={dog} />;
              })
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  dogsStore: PropType.instanceOf(DogsStore).isRequired,
};

export default App;
