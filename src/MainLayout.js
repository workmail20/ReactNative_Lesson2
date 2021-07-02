import React, {useContext} from "react";
import {Navbar} from "./components/Navbar";
import {View, StyleSheet} from "react-native";
import {THEME} from "./theme";
import {TodoScreen} from "./screens/TodoScreen";
import {MainScreen} from "./screens/MainScreen";
import {ScreenContext} from "./context/screen/screenContext";


export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext)

    return (
        <View style={styles.wrapper}>
            <Navbar title='Notebook'/>
            <View style={styles.container}>{todoId ? <TodoScreen/> : <MainScreen/>}</View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20,
        flex: 1
    },
    wrapper:{
        flex:1
    }
});
