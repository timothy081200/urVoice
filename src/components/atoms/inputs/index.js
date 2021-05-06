import React from 'react'
import {TextInput,View,StyleSheet} from 'react-native'

const Inputs = ({holder,bottom}) => {
  const style = StyleSheet.create({
    input:{
      height:60,
      width:337,
      borderRadius:50,
      textAlign:'center',
      borderWidth:1,
      marginBottom:bottom
    }
  })
  return (
    <TextInput placeholder={holder} style={style.input}/>
  )
}

export default Inputs
