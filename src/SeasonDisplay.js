import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    Summer:{
        text: 'Lets hit the beach !',
        iconName: 'sun'
    },
    Winter:{
        text: 'Burr, it is chilly!',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    }
    else{
        return lat > 0 ? 'Winter' : 'Summer';
    }
};

const SeasonDisplay = props =>{

    const season = getSeason(props.lat, new Date().getMonth( ));
    const {text, iconName} = seasonConfig[season];
    // console.log(text);

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1><h2 className="time">{props.time}</h2>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay; 