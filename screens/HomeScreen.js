import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import MenuList from '../components/MenuList'

const HomeScreen = () => {
  return (
      <View style={styles.container}>
      <Navbar/>
      <MenuList/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
})