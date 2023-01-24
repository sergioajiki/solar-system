import React from 'react';
import PropTypes from 'prop-types';

class PlanetCards extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    // console.log(this.props);
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
PlanetCards.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCards;
