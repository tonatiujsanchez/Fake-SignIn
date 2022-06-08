import React, { useState } from 'react'
import { 
    View, 
    Image, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Text, Alert } from 'react-native'


const LoginScreen = ({ navigation }) => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleSignInPress = () => {
        if( user.trim().length > 0 && password.trim().length > 0 ){
            if( user === 'root' && password === '123456' ){
                navigation.navigate('Home')
            }else{
                Alert.alert(
                    "¡Error!",
                    "User y/o Password son incorrectos"
                )
                setUser('')
                setPassword('')
            }
        }
    }

    const handleChangeUser = (text) => {
        setUser(text)
    }

    const handleChangePassword = (text) => {
        setPassword(text)
    }

    


    return (
        <View style={styles.contianer}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={handleChangeUser}
                    value={user}
                    placeholder='User'
                    style={styles.textInput}
                    placeholderTextColor="#C4C4C4"
                />
                <TextInput
                    onChangeText={handleChangePassword}
                    value={password}
                    secureTextEntry
                    placeholder='Password'
                    style={styles.textInput}
                    placeholderTextColor="#C4C4C4"
                />
            </View>
            <TouchableOpacity onPress={handleSignInPress}>
                <View style={styles.btnLogin}>
                    <Text style={styles.btnText}>Sign In</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginTop: 40,
        paddingBottom: 80
    },
    imageContainer: {
        alignSelf: 'center',
        padding: 10,
        borderRadius: 50,
        borderColor: '#C3C3C3',
        borderWidth: 1
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        alignSelf: 'center'
    },
    inputContainer: {
        marginTop: 20,
        marginBottom: 10
    },
    textInput: {
        padding: 10,
        marginBottom: 20,
        color: '#212121',
        fontSize: 16,
        backgroundColor: '#FFF',
        borderRadius: 5
    },
    btnLogin: {
        backgroundColor: '#1976D2',
        paddingVertical: 10,
        borderRadius: 5
    },
    btnText: {
        color: '#FFF',
        alignSelf: 'center',
        fontSize: 18,
        textTransform: 'uppercase',
    }
})

export default LoginScreen