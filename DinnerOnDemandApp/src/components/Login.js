import React from 'react';
import { View, TextInput, Text } from 'react-native'

function Login()
{

  return(
    <View>
      <Text>PLEASE LOG IN{"\n"}</Text>
      <TextInput placeholder="Username" textAlign='center' />
      <TextInput placeholder="Password" textAlign='center'/>
    </View>
  );
};

export default Login;