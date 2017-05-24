import React from 'react';
import PropTypes from 'prop-types';

class Row extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Hello world!!!
        </div>
      );
  }

}

Row.propTypes = {
  result: PropTypes.string
};

export default Row;