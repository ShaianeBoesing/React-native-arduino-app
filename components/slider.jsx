import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import ButtonWithLoader from './ButtonWithLoader';

const SliderComponent = () => {
  const [waitingForSetIntensity, setWaitingForSetIntensity] = useState(false);
  const [intensity, setIntensity] = useState(0);

  const handleSliderChange = (sliderValue) => {
    setIntensity(sliderValue);
  };

  const onPressSetIntensityLed = () => {
    setWaitingForSetIntensity(true);
    let newIntensity = intensity == '' ? -1 : intensity;
    fetch(`http://172.20.10.2:80/intensity/${newIntensity}`)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        // alert(data);
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
    <View >
      <Text>Intensidade: {intensity}%</Text>
      <View style={{ margin: 4 }} />
      <View style={styles.container}>
        <Slider style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={intensity}
          onValueChange={handleSliderChange}
          step={1}
          minimumTrackTintColor="#8a5336"
          maximumTrackTintColor="gray"
          thumbTintColor="#8a5336"
        />
        <ButtonWithLoader
          style={styles.button}
          title="Mudar Intensidade"
          onPress={onPressSetIntensityLed}
          isLoading={waitingForSetIntensity}
        /></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  slider: {
    width: 200,
    color: '#FFF',
    marginRight: 20,
  },
  button: {
  }

});

export default SliderComponent;
