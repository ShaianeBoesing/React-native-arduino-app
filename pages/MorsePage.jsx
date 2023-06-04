import {React,useState} from 'react';
import { View, StyleSheet,TextInput } from 'react-native';

import ButtonWithLoader from '../components/ButtonWithLoader';

const MorsePage = () => {
  const [waitingForSetMorse, setWaitingForSetMorse] = useState(false);
  const [morse, setMorse] = useState('');


    const onPressSetMorseLed = () => {
        setWaitingForSetMorse(true);
        let newMorse = morse == '' ? 'a' : morse; 
        fetch(`http://localhost:80/morse/${newMorse }`)
          .then(response => response.text())
          .then(data => {
            console.log(data);
            alert(data);
          })
          .catch(error => {
            console.error('Erro:', error);
            alert(error);
          })
          .finally(() => {
            setWaitingForSetMorse(false);
          });
      };

    return (
        <View style={styles.container}>
            <View style={styles.childs}>
                <TextInput
                    style={styles.input}
                    placeholder="Informe o texto"
                    onChangeText={text => setMorse(text)}
                    value={morse}
                />
                <ButtonWithLoader
                    title="Traduzir para Morse"
                    onPress={onPressSetMorseLed}
                    isLoading={waitingForSetMorse}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff0c7',

    },
    childs: {
        width: '95%',
        flexDirection:'row'
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor:'white'
      },
})
export default MorsePage;
