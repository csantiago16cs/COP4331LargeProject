import React from 'react';
import { View } from 'react-native'

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';

const LoginPage = () =>
{
    return(
      <View>
        <View>
          <PageTitle />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Login />
        </View>
      </View>
    );
};

export default LoginPage;