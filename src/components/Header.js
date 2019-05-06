import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ title }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 40,
    },
    headerText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
    }
})

export default Header