import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Alert, Keyboard} from 'react-native';
import {THEME} from "../theme";
import {MaterialCommunityIcons } from '@expo/vector-icons'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Name cannot be empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       onChangeText={setValue}
                       value={value}
                       placeholder="Enter work name"
                       autoCorrect={false}
                       autoCapitalize='none'
            />
            <MaterialCommunityIcons.Button onPress={pressHandler} name="file-plus-outline">
                Add
            </MaterialCommunityIcons.Button>
            {/*<Button title='Add data' onPress={pressHandler}/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
})