import React from 'react';
import PropTypes from 'prop-types';

class PlanetCards extends React.Component {
  render() {
    const { planetName } = this.props;
    const { planetImage } = this.props;

    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">
          {planetName}
        </p>
        <img src={ planetImage } alt={ `Planeta ${planetName}`} />
      </div>
    );
  }
}
PlanetCards.protoType = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string
}.isRequirid;

export default PlanetCards;