import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';


export default class PrimeiroApp extends Component {
  render() {    
    return(
      <View style={{flex : 1, flexDirection : 'row', justifyContent : 'center', alignItems : 'center'}}>
        <View style={{height:50, width:50, backgroundColor: 'red'}}></View>
        <View style={{height:50, width:50, backgroundColor: 'blue'}}></View>
        <View style={{height:50, width:50, backgroundColor: 'green'}}></View>
      </View>
      

      //flexDirection : 'row' / flexDirection : 'column'
      //justifyContent : flex-start / flex-end / center / space-between / space-around
      //alignItems : flex-start / flex-end / center / stretch
    );
  }
}