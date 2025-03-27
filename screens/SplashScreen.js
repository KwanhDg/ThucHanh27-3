import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function SplashScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Onboarding')}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/nectar_logo.png')}
          style={styles.logo}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 267.42,
    height: 68.61,
    resizeMode: 'contain',
  },
});