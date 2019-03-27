import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';


export default class PrimeiroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {text : ''};

    this.mudarText = this.mudarText.bind(this);
  }

  mudarText(t) {
    let string = this.state;
   if(t.length > 0) {
    string.text = 'Olá, ' + t; 
   } else {
    string.text = '';
   }

    this.setState(string);
  }
  
  render() {    
    return(
      <View style={styles.container}>
        <Text style={{paddingLeft : 10}}>Nome</Text>
        <TextInput style={styles.input} placeholder='Digite seu nome' onChangeText={this.mudarText} />
        
        <Text style={styles.text}>{this.state.text}</Text>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container : {
    paddingTop : 30
  },

  input : {
    height : 40,
    borderWidth : 1,
    borderColor : 'blue',
    margin : 10,
    padding : 10,
  },
  
  text : {
    fontSize : 20,
    textAlign : 'center', 
  },
});