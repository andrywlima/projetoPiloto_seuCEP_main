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
  const [cep, setCep] = useState('');
  const [dados, setdados] = useState(null);

  const buscarCep = () => {
    if (cep.replace('-', '').length != 8) {
      alert('Digite o CEP valido por favor!');

      return;
    }

    fetch(`https://viacep.com.br/ws/${cep.replace('-')}/json/`)
      .then(res => res.json())
      .then(objeto => setdados(objeto))
      .catch(err => alert('Tente novamente, CEP invalido!'))
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

      {dados != null &&  (
        
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
