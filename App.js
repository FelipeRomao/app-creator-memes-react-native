import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

class Janta extends Component {
  constructor(props) {
    super(props);
    this.state = {comida : ''};
    let comidas = ['Lasanha', 'Pizza', 'Burguer', 'Macarrão na chapa', 'Sopa', 'Frutas'];

    setInterval(() => {
      this.setState(previousState => {
        let n = Math.floor(Math.random() * comidas.length);
        return { comida : comidas[n] };
      });
    }, 1000);
  }

  render() {
    return(
      <View>
        <Text style={{textAlign : 'center', fontWeight : 'bold', fontSize : 25}}>Hoje você vai jantar:</Text>
        <Text style={{ textAlign : 'center', fontWeight : 'bold', fontSize : 25, color : 'blue'}}>{this.state.comida}</Text>
      </View>
    );
  }
}


export default class PrimeiroApp extends Component {
  render() {    
    return(
      <View style={styles.container}>
        <Janta />
        <Text style={styles.textFirst}>Estilo aplicado separado da tag</Text>
        <Text style={[styles.textSecond, styles.textFirst]}>Mais de um estilo aplicado separado da tag</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff',
    alignItems : 'center',
    justifyContent : 'center',
  },

  textFirst : {
    fontSize : 15,
    color : '#00FF00'
  },

  textSecond : {
    fontSize : 10,
    backgroundColor : 'orange',
    textAlign : 'center',
  },
});