import React from 'react';

const Greatings = (props) =>{
 return ( 
     <h1 lang={props.lang}>{props.children}</h1>
 );
}

export default Greatings;