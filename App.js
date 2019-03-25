import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';

class Imagem extends Component {
    render() {
      let imagem = {
        uri : 'https://ovicio.com.br/wp-content/uploads/' + this.props.nome + '.jpg',
      };

      return(
        <Image source={imagem} style={{height : parseInt(this.props.altura), width : parseInt(this.props.largura)}} />
      );
    }

}

export default class PrimeiroApp extends Component {
  render() {    
    return(
      <View style={styles.container}>
        <Button title='Click Aqui' onPress={() => alert('Hello World!')} />
        <Imagem nome = 'venom-postera-1068x631' altura = '350' largura = '350' />
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
});