import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';


const ButtonWithLoader = ({ title, onPress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      disabled={isLoading}
    >
      {isLoading && (
        <ActivityIndicator color="#ffffff" style={styles.buttonLoader} />
      )}
      <Text style={styles.buttonText}>{isLoading? "Processando" : title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8a5336',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
  },
  buttonLoader: {
    marginRight: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ButtonWithLoader;
