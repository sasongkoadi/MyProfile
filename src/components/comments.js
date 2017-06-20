/**
 * Created by sasongkoadi on 20/6/2017.
 */
// Import library to help create component
import React, {Component} from 'react';
import {
        Text,
        View

} from 'react-native';


// Create a component

class Komentar extends Component {

    state = { komentarKomentar: [] };

    componentWillMount() {
        // ASYNC HTTP Request to get albums from the API.
        // eslint-disable-next-line
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((responseData) => this.setState({ komentarKomentar: responseData }));
    }

    renderKomentar (){

        this.state.komentarKomentar.map(kataOrang => <Text> {kataOrang.name} </Text>)

    }

    render () {

        console.log(this.state);

        return (

            <Text>
                {this.renderKomentar()}
            </Text>

        );

    }

};


// make a component available to other parts of App

export default Komentar;
