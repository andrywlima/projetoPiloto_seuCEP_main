import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

// props - um obj das propriedades colocas no <Input /> dentro no app.js
function Input (props) {
    

        return (
    <TextInput
          value={props.valor}
          onChangeText={props.onChangeText}
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor='#c3c3c3'
          keyboardType="numeric"
          maxLength = {props.tamanho}
          editable= {props.editavel}
         />
)
        }
const styles = StyleSheet.create({

    input: {
        marginTop: 10,
        marginBottom: 10,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#c3c3c3',
        color : 'black'
      },
    })
    

export default Input;