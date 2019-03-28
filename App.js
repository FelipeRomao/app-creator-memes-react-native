import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button, Image, Text} from 'react-native';


export default class PrimeiroApp extends Component {
  constructor(props) {
    super(props);
    this.state = {text1 : '', text2 : ''};

    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(vogal) {
    let novoTexto = vogal.toLowerCase();
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    novoTexto = novoTexto.replace(/(á|à|â|ã)/g, 'i');
    novoTexto = novoTexto.replace(/(é|è|ê)/g, 'i');
    novoTexto = novoTexto.replace(/(í|ì|î)/g, 'i');
    novoTexto = novoTexto.replace(/(ó|ò|ô|õ)/g, 'i');
    novoTexto = novoTexto.replace(/(ú|ù|û)/g, 'i');

    return novoTexto;
  }

  escrever(texto) {
    let s = this.state;
    s.text1 = texto;
    s.text2 = this.mudarVogais(texto);

    this.setState(s);
  }

  render() {    
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Criador de Mimimi</Text>
        
        <View style={styles.inputArea}>
          <TextInput placeholder='Digite seu MIMIMI' style={styles.input}
           onChangeText={this.escrever} />
        </View>

        <View style={styles.areaPrincipal}>
          <Text style={[styles.text, styles.text1]}>{this.state.text1.toUpperCase()}</Text>  
          <Image style={styles.guri} source={require('./images/mimimi.jpg')} />
          <Text style={[styles.text, styles.text2]}>{this.state.text2.toUpperCase()}</Text>
        </View>
      </View>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container : {
    paddingTop : 30,
    backgroundColor : '#999999',
    flex : 1,
    flexDirection : 'column',
    alignItems : 'center',
  },

  input : {
    height : 40,
    borderWidth : 1,
    borderColor : '#999999',
    margin : 10,
    padding : 10,
    backgroundColor : '#eeeeee',
    color : '#000000',
  },

  inputArea : {
    alignSelf : 'stretch'
  },
  
  title : {
    fontSize : 30,
    textAlign : 'center',
    color : '#ffffff' 
  },

  areaPrincipal : {
    height : 300,
    width : 300,
    marginTop : 10
  },

  guri : {
    height : 300,
    width : 300,
    marginTop : -70,
    zIndex : 0
  },

  text : {
    fontSize : 25,
    color : '#ffffff',
    padding : 10,
    backgroundColor : 'transparent',
    fontWeight : 'bold',
    textAlign : 'center',
    height : 80
  },

  text1 : {
    zIndex : 1,
  },

  text2 : {
    zIndex : 1,
    marginTop : -70
  }
});