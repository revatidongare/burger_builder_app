import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css'

const layout = (props) => (

    <auxilary>
        <div> toolbar, sidetray,backdrop</div>
    <main className = {classes.Content} >
        {props.children}
        </main>
        </auxilary>
);
export default layout;