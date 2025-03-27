import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NumberScreen({ navigation }) {
  const [codeNumber, setcodeNumber] = useState('');

  const iscodeNumberValid = codeNumber.length === 4;

  return (
    <ImageBackground
      source={require('../assets/images/groceries.png')}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Text style={styles.title}>Enter your 4-digit code</Text>
          <Text style={styles.label}>Code</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={codeNumber}
              placeholder="- - - -"
              keyboardType="phone-pad"
              onChangeText={(text) => setcodeNumber(text)}
            />
          </View>
          <TouchableOpacity
            style={[styles.nextButton, { backgroundColor: iscodeNumberValid ? '#53B175' : '#ccc' }]}
            disabled={!iscodeNumberValid}
          >
            <Icon name="arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.resendButton}
            onPress={() => {}}
          >
            <Text style={styles.resendButtonText}>Resend Code</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  nextButton: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#53B175',
    borderRadius: 25,
  },
  resendButton: {
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
  resendButtonText: {
    fontSize: 16,
    color: '#53B175',
  },
});
