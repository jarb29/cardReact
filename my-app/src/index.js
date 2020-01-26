import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";


//Declaration of custom component (Card.js)

function Card(props){
    return (
        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="http.google.com" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}



Card.propTypes = {
    imageUrl:PropTypes.string,
    title: PropTypes.string
}





ReactDOM.render(<Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

