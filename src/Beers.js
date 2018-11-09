import React from "react";

class Beers extends React.Component {
    render(){
        return(
            <div>
                <h1>Beers We Have</h1>
                <div>
                    {this.props.beers.map((beer, i) => (
                        <div>
                            <h2 key={i}>{beer.name}</h2>
                            <p key={i}>{beer.category}</p>
                            <p key={i}>{beer.alc}%</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default Beers;
