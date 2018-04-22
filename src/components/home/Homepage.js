import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className = "jumbotron" >
            <h1> Pluralsight Administration</h1>
            <p> heheha</p>
            <a to="about" className = "btn btn-primary btn-lg"> Learn more </a>

            </div>
        );
    }
    }
    export default HomePage;