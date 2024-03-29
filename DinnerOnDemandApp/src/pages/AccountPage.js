import React, {useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import PageTitle from '../components/PageTitle';
import NavigationButton from '../components/NavigationButton';

const AccountPage = ({navigation}) =>
{
  return(
    <View style = {styles.container}>
      <View style={styles.logoOrientation}>
        <Image
        style={styles.logo}
        source={require('../components/Logo.png')}
        />
      </View>
      <View style = {styles.buttonOrientation}>
        <NavigationButton
        name = 'Login'
        doFunction = {() => navigation.push('LoginPage')}
        />
      </View>
      <View style = {styles.buttonOrientation}>
        <NavigationButton
        name = 'Register'
        doFunction = {() => navigation.push('RegisterPage')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ABDDDC',
  },
  logo: {
      height: 200,
      width: 200,
  },
  logoOrientation: {
    marginVertical: 50
  },
  buttonOrientation: {
    width: '85%',
    marginTop: 50,
  },
})

export default AccountPage;
