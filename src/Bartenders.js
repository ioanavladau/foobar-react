import React from "react";

class Bartenders extends React.Component {

    // constructor(props) {
    //     super(props);
       
    //     this.state = {
    //       working: null
    //     };
    //   }

    sortBartendersByStatus(x) {
        x.sort(
            function(x,y){
                return (x === y) ? 0 : x ? -1 : 1;
            }
        )
    }

    isBartenderWorking(b) {
        if (b.status==="WORKING"){
            this.setState({working: true})
        } else if (b.status==="READY") {
            this.setState({working: false})
        }
    }

    render(){
        return(
            <div>
                <h1>Bartenders</h1>
                <div>
                    {this.props.bartenders.map((bartender, i) => (
                        <div>
                            <h2>{bartender.name}</h2>
                            <p>{bartender.status}</p>
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default Bartenders;
