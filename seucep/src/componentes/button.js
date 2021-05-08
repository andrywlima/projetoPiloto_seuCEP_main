import React from 'react';
import {TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

function Buttonn (props) {
    return (
        <TouchableOpacity
         style={styles.button} 
         onPress={props.clique}>

        <Text style={styles.textButton}>Buscar</Text>
      </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'blue',
        marginTop: 20,
      },

      textButton: {
        fontWeight: 'bold',
        color: '#ffff',
        fontSize: 15,
      }
    })

export default Buttonn;