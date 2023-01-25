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

      <div data-testid="solar-system" className="sistema">
        <Title headline="Planetas" />
        <div className="planetas">
          {/* <PlanetCards /> */}
          {
            planets.map((planet) => (<PlanetCards
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
