import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import ErrorWrapper from '../../stores/DogsStore/ErrorWrapper';
import ErrorBlock from './ErrorBlock';

import './index.scss';

const ErrorsBoard = observer(({ errors }) => (
  <div className="dv-dog-errors-board">
    {
      errors
        .filter(error => error.display)
        .map(error => <ErrorBlock key={error.id} error={error} />)
    }
  </div>
));

ErrorsBoard.propTypes = {
  errors: PropType.arrayOf(PropType.instanceOf(ErrorWrapper)).isRequired,
};

export default ErrorsBoard;
