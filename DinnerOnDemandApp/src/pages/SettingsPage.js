import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import PageTitle from '../components/PageTitle';
import NavigationBar from '../components/NavigationBar';
import NavigationButton from '../components/NavigationButton';

const SettingsPage = ({navigation}) =>
{
    return(
      <View style = {styles.container}>
        <View style = {styles.header}>
          <PageTitle text = 'Profile Settings' />
        </View>
        <View style = {styles.body}>
          <View style = {styles.imageSection}>
            <Image
            style={styles.image}
            source={require('../components/Logo.png')}
            />
          </View>
          <View style = {styles.button}>
            <NavigationButton
            name = 'Change Name'
            destination = 'ProfilePage'
            />
          </View>
          <View style = {styles.button}>
            <NavigationButton
            name = 'Change Image'
            destination = 'ProfilePage'
            />
          </View>
          <View style = {styles.button}>
            <NavigationButton
            name = 'Change Password'
            destination = 'ProfilePage'
            />
          </View>
          <View style = {styles.button}>
            <NavigationButton
            name = 'Save'
            destination = 'ProfilePage'
            />
          </View>
        </View>
        {/* <View style = {styles.footer}>
          <NavigationBar />
        </View> */}
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    width: '100%',
  },
  body: {
    flex: 11,
    alignItems: 'center',
    width: '100%',
  },
  footer: {
    flex: 1.5,
    width: '100%',
  },
  background: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 50,
    height: 150,
    width: 300,
  },
  imageSection: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      width: 150,
      marginTop: 50,
  },
  image: {
      height: 150,
      width: 150,
  },
  buttonText: {
    fontSize: 23,
    margin: 10,
  },
  button: {
    width: '85%',
    marginTop: 30,
  },
});

export default SettingsPage;