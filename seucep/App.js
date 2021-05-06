import React, { Component } from 'react';
import type { Node } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default class App extends Component {

  //recebeo que foi digitado no input fica com o estado digitado
  state = {
    
     cep: '',
     //criar objeto dados

     dados: {
       bairro:'',
       lagradouro: '',
       complemento: '',
       localidade: '',
       uf : '',
       ddd: '',

     },

  };

  //criando a instância cep , função que só envia
  buscarCep = () => {
    // primeiro then converte todo o response do servidor em json
    // o segundo then é os dados
    this.setState({  // serve para limpar os dados
      dados: {
        bairro:'',
        lagradouro: '',
        complemento: '',
        localidade: '',
        uf : '',
        ddd: ''
      }

    });
    fetch(`https://viacep.com.br/ws/${this.state.cep}/json/`).then(res => res.json()).then(data =>{
      this.setState({
        dados: data
      })
      
    }).catch(err =>{
      console.log(err)
    })

  }

  render() {
    return (
      //criando um style para configuração de tela chamado de 'container' para deixar tudo enquadrado.
      // utilizando uma view para os texts, textinput e button, foi criando um style cara o titulo outra para o texto em seguida subtitulo
      //um style para o input para o button

      // foi utilizado o TouchableOpacity pois faz com que a view responda com o toque dado ao botão
      <View style={styles.container}>

        <Text style={styles.title}>Quer consultar seu CEP ou {"\n"} o CEP de algum lugar do Brasil?</Text>
        <Text style={styles.text}>Digite o CEP desejado aqui!</Text>
        <TextInput
          value={this.state.cep}
          onChangeText={cep => { this.setState({ cep }) }}
          style={styles.input}
          placeholder='Testando app'
          placeholderTextColor='#c3c3c3'
         />

        <TouchableOpacity
          style={styles.button}
          onPress={this.buscarCep}>

          <Text style={styles.textButton}>
            Buscar
        </Text>
        </TouchableOpacity>
      {
        this.state.dados.localidade ?  // caso esteja errado ou vazio, limpa o campo se não, tras os dados
        <View style = {styles.boxdados} >
        <Text style= {styles.textdados}>Bairro:{this.state.dados.bairro}</Text>
        <Text style= {styles.textdados}>lagradouro:{this.state.dados.lagraduro}</Text>
        <Text style= {styles.textdados}>complemento:{this.state.dados.complemento}</Text>
        <Text style= {styles.textdados}>localidade:{this.state.dados.localidade}</Text>
        <Text style= {styles.textdados}>UF:{this.state.dados.uf}</Text>
        <Text style= {styles.textdados}>DDD da região: {this.state.dados.ddd}</Text>
      </View> : null
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    marginHorizontal: 20,


  },

  title: {

    textAlign: 'center',
    color: '#ccc999',
    fontSize: 20,
    marginBottom: 80,
    fontWeight: 'bold',


  },

  text: {
    fontSize: 20,
    textAlign: 'center',


  },

  input: {

    marginTop: 20,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#c3c3c3'

  },

  button: {

    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'blue',
    marginTop: 20,
    
    
  },

  textButton : {
    fontWeight: 'bold',
    color: '#ffff',
    fontSize: 15
  },

  boxdados : {
    fontSize: 50,
    marginHorizontal: 35,
    paddingTop: 10,
  },

  textdados: {
    fontSize: 20,


  }

});

