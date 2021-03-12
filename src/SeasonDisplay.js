import { React } from "react";

const getSeasonDetails = (lat, month) => {
    console.log (lat, month);
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
      } else {
        return lat > 0 ? 'winter' : 'sumer';
      }    
};

const SeasonDisplay = (props) => {
    const seasonDetails = getSeasonDetails(props.lat, new Date().getMonth());
    const season = seasonDetails == 'winter' ? 'too cold' : 'Its too hot';
    return <div> {season} </div>
};

export default SeasonDisplay;