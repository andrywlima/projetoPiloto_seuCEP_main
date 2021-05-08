import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const  App = () => {

  const [cep, setCep ] = useState("")
  const [dados, setdados] = useState(null) 
  const [carregando, setcarregando] = useState(false)

  const buscarCep = () => {
   

       if (cep.replace("-", "" ).length != 8) {
         alert("Digite o cpf validor por favor!")

         return
       }

    fetch(`https://viacep.com.br/ws/${cep.replace("-")}/json/`)
    .then(res => res.json())
    .then(objeto => setdados(objeto))
    .catch(err => alert("Tente novamente, CEP invalido!")) 
    .finally(()=> setcarregando(false))
    
    } 
 
    return (
    
      <View style={styles.container}>
        <Text style={styles.title}>Quer consultar seu CEP ou {"\n"} o CEP de algum lugar do Brasil?</Text>
        <Text style={styles.text}>Digite o CEP desejado aqui!</Text>
        <TextInput
          value={cep}
          onChangeText={cep =>setCep( cep)}
          style={styles.input}
          placeholder='Testando app'
          placeholderTextColor='#c3c3c3'
          keyboardType="numeric"
         />
        <TouchableOpacity
          style={styles.button}
          onPress={buscarCep}>

          <Text style={styles.textButton}>
            Buscar
        </Text>
        </TouchableOpacity>
        {carregando && <Text>Verificando CEP</Text>}

           { dados != null && !carregando &&(
             
        <View style = {styles.boxdados} >
        <Text style= {styles.textdados}>CEP:  {dados.cep}</Text>
        <Text style= {styles.textdados}>Bairro: {dados.bairro}</Text>
        <Text style= {styles.textdados}>lagradouro: {dados.logradouro}</Text>
        <Text style= {styles.textdados}>complemento: {dados.complemento}</Text>
        <Text style= {styles.textdados}>localidade: {dados.localidade}</Text>
        <Text style= {styles.textdados}>UF: {dados.uf}</Text>
        <Text style= {styles.textdados}>DDD da região: {dados.ddd}</Text>
        <Text />
      </View> )}
     </View>
    );
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

export default App;