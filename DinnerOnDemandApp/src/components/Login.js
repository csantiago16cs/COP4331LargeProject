import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from "react-redux"
import SaveUser from "../redux/Actions/SaveUser"

function Login({navigation, mapDispatchToProps, user})
{
  const saveToRedux = () =>
  {
    mapDispatchToProps({name: "Carl", email: "carlantoine14@gmail.com", favorites: []})
  }

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
      <TouchableOpacity style = {styles.buttonBackground} /*onPress={() => saveToRedux()}*/ onPress={() => navigation.navigate("NavigationBar")} >
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
    backgroundColor: '#ABDDDC',
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

const mapStateToProps = ({UserReducer: { user }}) =>
{
  return {
    user
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    reduxSaveUser:(user) => dispatch(SaveUser(user))
  }
}

export default connect(mapStateToProps, { mapDispatchToProps })(Login);