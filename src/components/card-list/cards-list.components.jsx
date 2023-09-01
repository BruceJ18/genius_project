import { Component } from "react";
import Card from "../card/card.component";
import './cards-list.styles.css'



class CardList extends Component {


    render() {
        const { geniuses } = this.props

        return (
            <div className="card-list">

                {geniuses.map(genius => {


                    return (
                        <Card genius={genius} />
                    )
                
                
    })}


            </div>
        )
    }
}

export default CardList;