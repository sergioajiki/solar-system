import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    console.log(this.props);
    return (
      <h2>{ headline }</h2>
    );
  }
}
// headline.Proptypes = {
//   headline: PropTypes.string,
// };

export default Title;
