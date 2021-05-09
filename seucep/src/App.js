import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import Input from './componentes/input';
import Buttonn from './componentes/button';


const App = () => {

// Declarando a variavel, set é a função que coloca o valor na variavel
  const [cep, setCep] = useState('');
  const [dados, setdados] = useState(null); // estado
  const [validade, setvalidade] = useState(true);

  // funcao que faz a requisição
  const buscarCep = () => {

    // validando tabalho se o cep tem 8 digitos, 
    if (cep.replace('-', '').length != 8) {
      // setando a validade dizendo que ela é invalida(false)
      setvalidade(false)

      return;
    }
 // requisição
    fetch(`https://viacep.com.br/ws/${cep.replace('-')}/json/`)  // onde coloca o web service ou api
      .then(res => res.json())  //transforma a resposta em .json
      .then(objeto => { // pega o que foi retornado no de cima e feita a validação se é verdade ou não
        if ( objeto.erro) {
          setvalidade(false)
        } else {
          setdados(objeto)
          setvalidade(true)


            }
        
      })
      .catch(err =>   // caso de erro na requisição ou na resposta de um objeto
        console.log(err)
        )
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Quer consultar seu CEP ou {'\n'} o CEP de algum lugar do Brasil?
      </Text>
      <Text style={styles.text}>Digite o CEP desejado aqui!</Text>
      
      <Input
        value={cep}
        onChangeText={setCep}
        placeholder="digite o cep"
        tamanho={8}
      />
<Buttonn 
        clique = {buscarCep}
        />

        <Text> { !validade && 'CEP não encontrado!'} </Text>
      { validade &&  (
        
        <View style={styles.boxdados}>
          <Text>CEP:</Text>
          <Input editavel={false} valor={dados.cep} />

          <Text>BAIRRO:</Text>
          <Input editavel={false} valor={dados.bairro} />

          <Text>LOGRADOURO:</Text>
          <Input editavel={false} valor={dados.logradouro} />

          <Text>COMPLEMENTO:</Text>
          <Input editavel={false} valor={dados.complemento} />

          <Text>LOCALIDADE:</Text>
          <Input editavel={false} valor={dados.localidade} />

          <Text>UF:</Text>
          <Input editavel={false} valor={dados.uf} />

          <Text>DDD DA REGIÃO:</Text>
          <Input editavel={false} valor={dados.ddd} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,

  },

  title: {
    textAlign: 'center',
    color: '#ccc999',
    fontSize: 20,
    marginBottom: 20,
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
    borderColor: '#c3c3c3',
  },

  boxdados: {
    marginHorizontal: 10,
    paddingTop: 10,
  },

  textdados: {
    fontSize: 50,
  },
});

export default App;
