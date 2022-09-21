import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props)
    const {name , population , flags} = props.country;
    return (
        <div className='card'>
            <h1>Country Name : {name.common}</h1>
            <h3>Country Population : {population}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;