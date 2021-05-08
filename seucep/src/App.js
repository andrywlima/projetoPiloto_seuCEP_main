import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import Input from './componentes/input';
import Buttonn from './componentes/button';

const App = () => {
  const [cep, setCep] = useState('');
  const [dados, setdados] = useState(null);
  const [carregando, setcarregando] = useState(false);

  const buscarCep = () => {
    if (cep.replace('-', '').length != 8) {
      alert('Digite o cpf validor por favor!');

      return;
    }

    fetch(`https://viacep.com.br/ws/${cep.replace('-')}/json/`)
      .then(res => res.json())
      .then(objeto => setdados(objeto))
      .catch(err => alert('Tente novamente, CEP invalido!'))
      .finally(() => setcarregando(false));
  };

  return (
    <View style={styles.container}>
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

      
      {carregando && <Text>Verificando CEP</Text>}

      {dados != null && !carregando ? (
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
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 20,
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
    fontSize: 50,
    marginHorizontal: 35,
    paddingTop: 10,
  },

  textdados: {
    fontSize: 20,
  },
});

export default App;
