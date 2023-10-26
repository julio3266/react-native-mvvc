import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import useLoginViewModel from './view.model';

export const Login = () => {
    const { handleLogin, isLoading, password, setPassword, setUser, user } = useLoginViewModel()
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                value={user}
                onChangeText={(Text) => { setUser(Text) }}
                placeholder='Usuário'
                placeholderTextColor={'#fff'}
                style={styles.input}
            />
            <TextInput
                placeholder='Senha'
                value={password}
                onChangeText={(Text) => { setPassword(Text) }}
                secureTextEntry={true}
                placeholderTextColor={'#fff'}
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => { handleLogin() }}
            >
                <Text style={styles.buttonLabel}>
                    Login
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    input: {
        textAlign: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        width: 350,
        height: 50,
        borderRadius: 12,
        margin: 5,
        color: '#fff'
    },
    button: {
        width: 350,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    buttonLabel: {
        fontSize: 20,
        fontWeight: '700'
    }
})