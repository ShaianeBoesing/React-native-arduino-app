import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import ButtonWithLoader from './components/ButtonWithLoader';

const App = () => {
  const [waitingForSetState, setWaitingForSetState] = useState(false);
  const [waitingForSetIntensity, setWaitingForSetIntensity] = useState(false);
  const [intensity, setIntensity] = useState('0');
  const [state, setState] = useState('off');

  const onPressSetState = async () => {
    setWaitingForSetState(true);
    let newState = state == 'on' ? 'off' : 'on';
    console.log(newState);
    fetch(`http://localhost:80/setState/${newState}`)
      .then(response => response.text())
      .then(data => {
        setState(newState);
        console.log(data);
        alert(data);
      })
      .catch(error => {
        console.error('Erro:', error);
        alert(error);
      })
      .finally(() => {
        setWaitingForSetState(false);
      });
  };

  const onPressSetIntensityLed = () => {
    setWaitingForSetIntensity(true);
    let newIntensity = intensity == '' ? -1 : intensity; 
    fetch(`http://localhost:80/intensity/${newIntensity }`)
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
        setWaitingForSetIntensity(false);
      });
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        
        <Text style={styles.title}>Mudar estado do LED</Text>
        <ButtonWithLoader
          title="Led ON/OFF"
          onPress={onPressSetState}
          isLoading={waitingForSetState}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a intensidade"
          onChangeText={text => setIntensity(text)}
          value={intensity}
          keyboardType="numeric"
        />
        <ButtonWithLoader
          title="Mudar Intensidade"
          onPress={onPressSetIntensityLed}
          isLoading={waitingForSetIntensity}
        />
      </View>
    </SafeAreaView>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff0c7',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8a5336',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
  },
  buttonLoader: {
    marginLeft: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  title: {
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
  },

});

export default App;
