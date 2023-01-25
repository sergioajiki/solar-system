import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions">
        <Title headline="Missões" />
        {/* <MissionCard /> */}
        <div className="cards">
          {
            missions.map((mission, index) => (<MissionCard
              key={ index }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
