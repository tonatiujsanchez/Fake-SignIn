import React, { useState } from 'react'
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    SafeAreaView, 
    FlatList } from 'react-native'


const TodoListScreen = () => {
    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleChangeText = (text) => {
        setTodoText(text)
    }

    const handleButtonPress = () => {
        if (todoText.trim() === '') {
            return
        }

        setTodoList([...todoList, { text: todoText }])
        setTodoText('')
    }

    const renderItem = ({ item }) => (
        <Text style={styles.textItem}>{item.text}</Text>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                <View>
                    <TextInput
                        placeholder='Nuevo todo'
                        style={styles.textInput}
                        placeholderTextColor="#C4C4C4"
                        value={todoText}
                        onChangeText={handleChangeText} />
                    <TouchableOpacity onPress={handleButtonPress}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Enter</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={todoList}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${index}${item.text}`} />
                </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBFB'
    },
    viewContainer: {
        paddingTop: 40,
        paddingBottom: 20,
        paddingLeft: 12,
        paddingRight: 12
    },
    textInput: {
        padding: 10,
        marginBottom: 20,
        color: '#212121',
        fontSize: 16,
        backgroundColor: '#F5F5F5'
    },
    btn: {
        width: '100%',
        backgroundColor: '#2196F3',
        color: '#FFF',
        fontSize: 20,
        padding: 16,
        borderRadius: 4,
        marginBottom: 20
    },
    btnText: {
        alignSelf: 'center',
        color: '#FFFBFB',
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    listContainer: {
        marginTop: 20,
        paddingHorizontal: 20
    },
    textItem: {
        fontSize: 20,
        marginBottom: 10,
        color: '#333'
    }
})

export default TodoListScreen