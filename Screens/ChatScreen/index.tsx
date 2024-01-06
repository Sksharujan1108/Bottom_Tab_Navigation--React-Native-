import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ChatScreen = ({navigation}: any) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.Txt}>ChatScreen</Text>
        <TouchableOpacity onPress = {() => alert('Button Click')}>
          <Text style = {styles.Btn}> Click On </Text>
        </TouchableOpacity>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
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