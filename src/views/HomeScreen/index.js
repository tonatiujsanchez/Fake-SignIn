import React from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    style={styles.headerImage}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Welcom back. User!</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: '#63A4FF',
        height: 55,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 12
    },
    headerImage: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 50,
        textAlign: 'center'
    }
})

export default HomeScreen