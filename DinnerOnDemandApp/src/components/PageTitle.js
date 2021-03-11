import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function PageTitle()
{
   return(
     <View style = {styles.header}>
        <Text style={styles.text}>Dinner On Demand</Text>
     </View>
   );
};

const styles = StyleSheet.create({
   header: {
      height: 60,
      padding: 15,
      backgroundColor: 'black',
   },
   text: {
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
   },
});

export default PageTitle;