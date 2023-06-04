import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const { format } = require('date-fns');
const { ptBR } = require('date-fns/locale');

const Table = ({ historyArrObject }) => {
    const formattedData = historyArrObject.map((item) => ({
        ...item,
        createdAt: format(new Date(item.createdAt), 'dd/MM/yyyy HH:mm:ss', { locale: ptBR }),
    }));
    
  return (
    <ScrollView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>Tipo</Text>
        <Text style={styles.header}>Valor</Text>
        <Text style={styles.header}>Data</Text>
      </View>
      {formattedData.map((item, index) => (
        <View style={styles.row} key={index}>
          <Text style={styles.cell}>{item.type}</Text>
          <Text style={styles.cell}>{item.value}</Text>
          <Text style={styles.cell}>{item.createdAt}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    width: 500
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  header: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Table;
