import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import { LinearGradient } from 'expo'
import { primaryGradientArray } from './utils/Colors'
import Header from './components/Header'

const headerTitle = 'To Do!'

class Main extends React.Component {
    render () {
        return (
            <LinearGradient colors={primaryGradientArray} style={styles.container}>
            <View style={styles.cetered}>
                <Header title={headerTitle}/>
            </View>
                <StatusBar barStyle='light-content' />
                <Text style={styles.text}>Start working on native app</Text>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: '#fff',
    }
})

export default Main