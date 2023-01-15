import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

export default class Button extends React.PureComponent {
  render() {
    const { label } = this.props;

    return (
      <button className="button" type="button">
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};
