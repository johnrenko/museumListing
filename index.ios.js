/**
 * Sample Firebase & React Native App
 * https://github.com/davideast/firebase-react-native-sample
 */
'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import * as firebase from 'firebase';
import NativeTachyons from "react-native-style-tachyons";
import {styles as s} from "react-native-style-tachyons";

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} = ReactNative;

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAJO4FTAqReHONa3n4FvNo9R9u8RghAZJc",
  authDomain: "museumlisting.firebaseapp.com",
  databaseURL: "https://museumlisting.firebaseio.com",
  storageBucket: "museumlisting.appspot.com",
  messagingSenderId: "968555127105"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

NativeTachyons.build({
   /* REM parameter is optional, default is 16 */
   rem: 16
}, StyleSheet);

  class museumListing extends Component {

    render() {
      return (
        <View style={[s.flx_i, s.flx_row, s.jcc, s.aic, s.ma3, s.bb, s.max_h3, s.mh0]}>
          <Text style={[s.f4]}>Test </Text>
        </View>
      )
    }
  }

AppRegistry.registerComponent('museumListing', () => museumListing);