import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SettingScreen = ({navigation}: any) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Txt} >SettingScreen</Text>
        <TouchableOpacity onPress={() => alert('Button Click')}  >
            <Text style = {styles.Btn}> Click On </Text>
        </TouchableOpacity>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Txt: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      margin: 25,
    },
    Btn: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
      margin: 45,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 15,
      elevation: 15,
    },
})