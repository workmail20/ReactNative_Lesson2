import React from 'react';
import {StyleSheet, View} from 'react-native';
import {THEME} from "../theme";
import {AppTextBold} from "./ui/AppTextBold";
import {Platform} from 'react-native'

export const Navbar = ({title}) => {
    return (
        <View style={{
            ...styles.navbar, ...Platform.select({
                ios: styles.navbarIos,
                android: styles.navbarAndroid
            })
        }}>
            <AppTextBold style={styles.text}>{title}</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10

    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR
    },
    navbarIos: {
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: Platform.OS === 'ios' ? THEME.MAIN_COLOR : '#fff',
        fontSize: 20
    }
})