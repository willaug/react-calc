import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

export default class Display extends React.PureComponent {
  render() {
    const { value } = this.props;

    return (
      <div className="display">
        {value}
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};
