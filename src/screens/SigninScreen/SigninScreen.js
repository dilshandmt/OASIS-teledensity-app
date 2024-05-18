import { View, Text, Image, StyleSheet, useWindowDimensions, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import MainLogo from '../../../assets/images/logoa.png'
import Background from '../../../assets/images/background.png'
import CustomInput from '../../components/custominput/CustomInput'
import Button from '../../components/button'




const SigninScreen = () => {
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');

  const onSigninpressd=()=>{
    console.warn("Sign in");
  }
  const onFortgotPasswordPressed=()=>{
    console.warn("Forgot password");
  }
  const onLoginPressed=()=>{
    console.warn("Login");
  }
  const { height } = useWindowDimensions();
  return (
    <ImageBackground source={Background} style={styles.background}>
      <View style={styles.root}>
        
        <Image source={MainLogo} style={[styles.logo, { height: height * 0.26 }]} resizeMode="contain" />
        <Text style={styles.boldtext}>User Login</Text>
        <Text style={styles.text}>Please enter youser details to login to the device</Text>
        <Text></Text>
        <Text style={styles.text}>Enter user name</Text>
        <CustomInput  placeholder="UserID" output={username} setValue={setUsername} securetextentry={false}/>
        <Text style={styles.text}>Enter password</Text>
        <CustomInput  placeholder="Password" output={password} setValue={setPassword} securetextentry={true} />
        <Button buttonText="Login" onPress={onLoginPressed}  />
        <Button   buttonText="Forgot Password?"  onPress={onFortgotPasswordPressed} type="TERTIARY" />
        
        <View style={styles.horizontal}>
          <View style={styles.line} />
          <Text style={styles.continueText}>or continue with</Text>
          <View style={styles.line} />
        </View>
        <Button buttonText="Sign Up" onPress={onSigninpressd} bgColor={"#004E89"} setHeight={20} setWidth={"80%"} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '35%',
    maxWidth: 300,
    height: '50%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  background: {
    width: "100%",
    height: "100%"
  },
  boldtext:{
    fontWeight: 'bold',
    fontSize: 20,
    width:'95%',
  },
  text:{
    width:'95%',
    paddingBottom:10,
    paddingTop:5
    
  },
  line: {
    flex: 1, // Take up equal space
    height: 1,
    backgroundColor: '#e6e7ff',
    marginHorizontal: 5, // Adjust spacing between lines and text
  },
  continueText: {
    fontSize: 16,
    color: 'white',
    marginTop: -10,
  
   
    flex: 1, // Take up equal space
    textAlign: 'center', // Center the text horizontally
    marginTop:-20
  },
  horizontal:{
    flex: 1,
    flexDirection: 'row', // Arrange items horizontally
    alignItems: 'center', // Center items vertically
    paddingTop:20
    
  }
})
export default SigninScreen