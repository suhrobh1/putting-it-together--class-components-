import React, {Component} from 'react';


class Persons extends Component{
    constructor(props){
        super(props);

        
        this.state = {age: this.props.age}
        console.log(this.props.age);
       
    }

    buttonHandler = () =>{
        this.setState({age:(this.props.age + 1)});
    }

    render(){
        const { firstName, lastName, hairColor } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair: {hairColor}</p>
                <button onClick={this.buttonHandler}>Birthday Button for {firstName}</button>
            </div>
        )
    }
}
export default Persons;