/**
 * Created by sasongkoadi on 20/6/2017.
 */
/**
 * Created by blackrex on 17/06/17.
 */
// Import library to help create component
import React from 'react';
import {
    Text,
    View



} from 'react-native';



// Create a component

const Header = () => {

    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>REFACTORY</Text>
        </View>
    );
};


const styles = {

    viewStyle:{

        backgroundColor : '#6faedd',
        justifyContent  : 'center',
        alignItems      : 'center',
        height          : 50,
        paddingTop      : 15,
        shadowColor     : '#000',
        shadowOffset    : { width: 0, height: 2 },
        shadowOpacity   : 0.2

    },

    textStyle:{

        fontSize    : 20,
        color       : '#ffffff',
        fontWeight  : 'bold'

    }

};


// make a component available to other parts of App

export default Header;