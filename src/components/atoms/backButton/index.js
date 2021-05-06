import React from 'react'
import {TouchableOpacity} from 'react-native'
import {BackBtn} from '../../../assets'

const BackButton = ()=>{
  return(
    <TouchableOpacity style={{width:50,height:27}}>
      <BackBtn/>
    </TouchableOpacity>
  )
}

export default BackButton
