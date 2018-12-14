import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import Dog from '../../stores/DogsStore/Dog';

import './index.scss';

@observer
class DogImage extends React.Component {
  constructor(props) {
    super(props);
    this.image = React.createRef();
  }

  componentDidMount() {
    const img = this.image.current;
    const { dog: { setLoaded } } = this.props;

    if (img && img.complete) {
      setLoaded();
    }
  }

  handleError = () => {
    const { dog: { setError, title }, showError } = this.props;

    setError();
    showError(new Error(`Failed to load image: ${title}`));
  }

  isLoading = () => {
    const { dog: { loading } } = this.props;

    return loading && !this.image.current;
  }

  render() {
    const {
      dog: {
        url, slug, error, setLoaded, date, title, username,
      },
    } = this.props;

    return (
      <div className="dv-dog-image">
        <div className="dv-dog-image__content">
          <div className="dv-dog-image__content-img">
            {
              this.isLoading() && <p className="dv-dog-image__loader">Loading</p>
            }
            {
              error && <p className="dv-dog-image__error">Error</p>
            }
            <img
              src={url}
              alt={slug}
              ref={this.image}
              className={this.isLoading() ? 'dv-dog-image__img' : 'dv-dog-image__img dv-dog-image__img--visible'}
              onLoad={setLoaded}
              onError={this.handleError}
            />
          </div>
          <div className="dv-dog-image__content-description">
            <p>{date}</p>
            <p>{username}</p>
            <p>{title}</p>
          </div>
        </div>
      </div>
    );
  }
}

DogImage.propTypes = {
  showError: PropType.func.isRequired,
  dog: PropType.instanceOf(Dog).isRequired,
};

export default DogImage;
