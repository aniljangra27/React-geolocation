import './SeasonDisplay.css';
import { React } from "react";

const seasonConfig = {
    winter : {
        text : "Let drink some wishky",
        iconName : "snowflake"
    },
    summer :{
        text : "Lets get some beeear",
        iconName: "sun"
    }
};

const getSeasonDetails = (lat, month) => {
    console.log (lat, month);
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
      } else {
        return lat > 0 ? 'winter' : 'sumer';
      }    
};

const SeasonDisplay = (props) => {
    const season = getSeasonDetails(props.lat, new Date().getMonth());
    //Add ICON here : we used https://semantic-ui.com/elements/icon.html for icon
    const {text, iconName} = seasonConfig[season];

    return (
    <div className='seasonpos'> 
        <i className={`massive ${iconName} icon`}></i>
        {text} 
        <i className={`massive ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;