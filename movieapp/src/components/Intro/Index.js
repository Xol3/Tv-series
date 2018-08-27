import React from 'react';

//functional components because it is javascript functions returning react element
//important to have the custom components capitalized sine the syntax reffers to the custom compoents
const Intro = props => (
<p className = 'App-intro'>
{props.message}
</p>
)

export default Intro;
