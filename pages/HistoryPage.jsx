import { React, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Table from '../components/Table';

const HistoryPage = () => {
    const [historyArrObject, setHistoryArrObject] = useState('[]')


    const LoadHistory = () => {
        fetch(`http://172.20.10.2:80/history`)
            .then(response => response.text())
            .then(data => {
                setHistoryArrObject(data)
                console.log(data)
            })
            .catch(error => {
                console.error('Erro:', error);
                alert(error);
            })
    };

    return (
        <View style={styles.container}>
            <View style={styles.childs}>
                {LoadHistory()}
                <Table historyArrObject={JSON.parse(historyArrObject)} />
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
        flexDirection: 'row'
    },
})
export default HistoryPage;
