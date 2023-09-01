import { Component } from "react";

import './card.styles.css'


class Card extends Component {
    render() {

        const {name, id} = this.props.genius
        
        return (
            <div key={id} className="card-container">
                <img
                className="genius-image" 
                src={`images/genius-${id}.jpg`} 
                alt={`Image of, ${name}`} 
                />

                <h2 >{name}</h2>
                    
                </div>


        )
    }
}


export default Card;