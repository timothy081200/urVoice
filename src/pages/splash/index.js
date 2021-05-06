import React,{useEffect} from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {SplashLogo,LogoLeft} from '../../assets'

const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.replace('Discover')
    },3000)
  },[])
  return (
    <View style={style.page}>
      <LogoLeft style={style.logo} transition={false}/>
      <View style={style.tcontainer}>
        <Text style={style.text}>Ur-Voice</Text>
        <Text style={style.text2}>music library</Text>
      </View>
      <SplashLogo style={style.logo2} transition={false}/>
    </View>
  )
}

export default Splash;

const style = StyleSheet.create({
  page:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    position:'relative',
    flexDirection:'column'
  },
  tcontainer:{
    position:'absolute',
    top:230
  },
  text:{
    fontSize:64,
    color:"#873A3A",
    zIndex:1
  },
  text2:{
    fontSize:26,
    color:'#828282',
    zIndex:1,
    textAlign:'center'
  },
  logo:{
    position:'absolute',
    left:0,
    top:-50,
    zIndex:1
  },
  logo2:{
    height:514,
    width:414,
    position:'absolute',
    bottom:0
  }
})
