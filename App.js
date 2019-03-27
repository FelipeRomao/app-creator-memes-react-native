import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button, Alert, Text} from 'react-native';


export default class PrimeiroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {inputText : '', text : ''};

    this.apertouBotao = this.apertouBotao.bind(this);
  }


  apertouBotao() {
   let s = this.state;
   if(s.inputText == 'Felipe') {
      s.text = 'Acertou miseravi';
   } else {
     s.text = 'Errou miseravi';
   }

   this.setState(s);
  }

  render() {    
    return(
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder='Digite alguma coisa' 
          onChangeText={(inputText) => this.setState({inputText})} />
        
        <Button title='Aperte em mim galera' onPress={this.apertouBotao} />

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