/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import Header from './src/components/header';
import Komentar from './src/components/comments';
import Profile from './src/components/profile';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';



const App = () => {

    return (

    <View>
        <View>
          <Header/>
          <Profile/>
        </View>

        <View>
            <Komentar/>
        </View>

    </View>


    );

};



AppRegistry.registerComponent('MyProfile', () => App);

