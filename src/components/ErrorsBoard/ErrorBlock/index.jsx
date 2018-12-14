import React from 'react';
import PropType from 'prop-types';
import { observer } from 'mobx-react';
import ErrorWrapper from '../../../stores/DogsStore/ErrorWrapper';

import './index.scss';

const ErrorBlock = observer(({ error: { read, message } }) => (
  <div className="dv-dog-error">
    {
      read ? null
        : (
          <div className="dv-dog-error__content">
            Error:
            <span>{message}</span>
          </div>
        )
    }
  </div>
));

ErrorBlock.propTypes = {
  error: PropType.instanceOf(ErrorWrapper).isRequired,
};

export default ErrorBlock;
