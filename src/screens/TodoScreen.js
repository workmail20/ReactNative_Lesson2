import React, {useContext} from 'react'
import {StyleSheet, View, Dimensions} from 'react-native'
import {THEME} from "../theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {useState} from "react";
import {AppTextBold} from "../components/ui/AppTextBold";
import {AppButton} from "../components/ui/AppButton";
import {Foundation, MaterialIcons} from "@expo/vector-icons";
import {ScreenContext} from "../context/screen/screenContext";
import {TodoContext} from "../context/todo/todoContext";


export const TodoScreen = () => {
    const [modal, setModal] = useState(false)
    const {todos,updateTodo, removeTodo} = useContext(TodoContext)
    let {todoId, changeScreen} = useContext(ScreenContext)

  //  todoId='1'

    const todo = todos.find(t => t.id === todoId)

    const saveHandler = async title => {
        await updateTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />

            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)}>
                    <Foundation name="page-edit" size={20} color="#fff"/>
                </AppButton>
            </AppCard>


            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={() => changeScreen(null)} color={THEME.GREY_COLOR}>
                        <MaterialIcons name="arrow-back" size={20} color="#fff">

                        </MaterialIcons>
                    </AppButton>

                </View>
                <View style={styles.button}>
                    <AppButton color={THEME.DANGER_COLOR} onPress={() => removeTodo(todo.id)}>
                        <MaterialIcons name="highlight-remove" size={20} color="#fff">

                        </MaterialIcons>
                    </AppButton>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: Dimensions.get('window').width > 400 ? 150 : 100
    },
    title: {
        fontSize: 20
    }
})