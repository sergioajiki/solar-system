import React from 'react';
import PlanetCards from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';
// import PropTypes from 'prop-types';

class SolarSystem extends React.Component {
  render() {
    // const { Planets } = this.props;
    // console.log(this.props);
    // console.log(planets);
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {/* <PlanetCards /> */}
        {
          planets.map((planet) => (<PlanetCards
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />))
        }
      </div>
    );
  }
}

export default SolarSystem;
