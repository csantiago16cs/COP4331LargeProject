import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'

function Login()
{
  return(
    <View style = {styles.background}>
      <Text style = {styles.loginTitle}>Sign In{"\n"}</Text>
      <Text style = {styles.inputTitle}> Email</Text>
      <TextInput style = {styles.input} placeholder="Please enter email" />
      <Text style = {styles.inputTitle}> Password</Text>
      <TextInput style = {styles.input} placeholder="Please enter password" />
      <TouchableOpacity>
        <Text style = {styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.buttonBackground} >
        <Text style = {styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style = {{color: 'black'}}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style = {styles.signUpText}>{"\t"}Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    paddingVertical: 60,
    paddingHorizontal: 20,
    marginTop: 50,
    borderRadius: 10,
    width: '85%'
  },
  loginTitle: {
    textAlign: 'center',
    marginBottom: 50,
    fontSize: 40,
  },
  inputTitle:{
    color: 'black',
    marginTop: 10,
  },
  input: {
    color: 'black',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 2.5,
  },
  buttonBackground: {
    backgroundColor: 'blue',
    marginTop: 25,
    marginBottom: 20,
    borderRadius: 2.5,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 23,
    margin: 10,
  },
  forgotPasswordText: {
    color: 'blue',
    textAlign: 'right',
    marginTop: 2.5,
  },
  signUpText: {
    color: 'blue',
  },
})

export default Login;