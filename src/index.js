import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position =>console.log(position), 
//         err => console.log(err));
//     return (
//         <div>
//             Hi There !!
//         </div>
//     );
// };

//Class component example
class App extends React.Component {
    constructor(props) {
        super(props);
        //here only this.state is works to initialize state variables
        this.state = {lat: null, longitude: null, errMessage: ''};
        //set the state of objet - IT is not recommened to do data loading inside constructor. Instead of constructor use componentDidMount
        window.navigator.geolocation.getCurrentPosition(
            position => {
                //set the values inside setState method
                this.setState({lat:position.coords.latitude});
                this.setState({longitude: position.coords.longitude});
            }, 
            err => {
                this.setState({errMessage: err.message});
            }
        );

    }

    //Some Life cycle methods
    componentDidMount() {
        console.log('My component get mounted');
    }
    // before calling componentDidUpdate -- render get called 
    componentDidUpdate() {
        console.log('My component get updated ');
    }

    //render is require function of react and this also a life cycle method which called many times
    render() {
        if (this.state.errMessage && !this.state.lat) {
            return <dic> Error {this.state.errMessage}</dic>
        }
        if (this.state.lat && !this.state.errMessage) {
            return <div> Latitude: {this.state.lat} <br/>Longitude: {this.state.longitude}</div>
        }
        return <div>Loading!.....</div>
        
        // return (
        //     <div>
        //         Latitude: {this.state.lat} 
        //        <br></br>
        //         Longitude: {this.state.longitude}
        //     </div>
        // );
    }
}
ReactDOM.render(<App/>, document.querySelector('#root'));
