/**
 * Created by blackrex on 17/06/17.
 */
// Import library to help create component
import React, { Component } from 'react';
import {
    View,
    Image,
    Text

} from 'react-native';

// Create a component

class Profile extends Component {

    render () {

        const {imgStyle, viewStyle, textStyleSatu, textStyleDua} = styles;

        return (

            <View style={viewStyle}>
                <Image
                    style={imgStyle}
                    source={require('../img/adi.png')}
                    resizeMode="cover"
                />

                <Text style={textStyleSatu}>Sasongko Adi</Text>
                <Text style={textStyleDua}>Luciano Class</Text>
            </View>

        );
    }
};

const styles = {

    imgStyle:{

        justifyContent  : 'center',
        alignSelf       : 'center',
        height          : 200,
        width           : 200,
        borderWidth     : 0.2,
        borderRadius    : 100,
        shadowColor     : '#000',
        shadowOffset    : { width: 0, height: 2 },
        shadowOpacity   : 0.2

    },

    viewStyle:{

        backgroundColor : '#6faedd',
        justifyContent  : 'center',
        height          : 320,
        paddingBottom   : 15,
        shadowColor     : '#000',
        shadowOffset    : { width: 0, height: 2 },
        shadowOpacity   : 0.2
    },

    textStyleSatu:{

        fontSize    : 30,
        color       : '#ffffff',
        paddingTop    : 20,
        paddingBottom : 5,
        alignSelf   : 'center',
    },

    textStyleDua:{

        fontSize    : 18,
        color       : '#424242',
        alignSelf   : 'center',

    },


};

// make a component available to other parts of App
export default Profile;/**
 * Created by sasongkoadi on 20/6/2017.
 */
