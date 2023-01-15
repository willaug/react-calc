import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default class Button extends React.PureComponent {
  render() {
    const {
      label,
      double,
      triple,
      onFunc,
      operation,
    } = this.props;

    return (
      <button
        className={`
          button
          ${operation ? 'operation' : ''}
          ${double ? 'double' : ''}
          ${triple ? 'triple' : ''}
        `}
        type="button"
        onClick={() => onFunc(label)}
      >
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onFunc: PropTypes.func.isRequired,
  double: PropTypes.bool,
  triple: PropTypes.bool,
  operation: PropTypes.bool,
};

Button.defaultProps = {
  triple: false,
  double: false,
  operation: false,
};
