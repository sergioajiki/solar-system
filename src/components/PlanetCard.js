import React from 'react';
import PropTypes from 'prop-types';

class PlanetCards extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    // console.log(this.props);
    return (
      <div data-testid="planet-card" className="planetCards">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="sizePlanet" />
        <p data-testid="planet-name">{ planetName }</p>
      </div>
    );
  }
}
PlanetCards.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
}.isRequired;

export default PlanetCards;
