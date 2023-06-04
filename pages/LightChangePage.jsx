import { React, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SliderComponent from '../components/slider';
import ButtonWithLoader from '../components/ButtonWithLoader';

const LightChangePage = () => {
    const [state, setState] = useState('off');
    const [waitingForSetState, setWaitingForSetState] = useState(false);

    const onPressSetState = async () => {
        setWaitingForSetState(true);
        let newState = state == 'on' ? 'off' : 'on';
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

    return (
        <View style={styles.container}>
            <View style={styles.childs}>
                <SliderComponent />
                <View style={{ margin: 10 }} />
                <View style={styles.onoffCOntainer}>
                    <Text>{state === 'on'?'O led esta ligado':'O led esta desligado'}</Text>
                    <ButtonWithLoader
                        style={styles.button}
                        title="Led ON/OFF"
                        onPress={onPressSetState}
                        isLoading={waitingForSetState}
                    /></View>

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
    },
    onoffCOntainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})

export default LightChangePage;
