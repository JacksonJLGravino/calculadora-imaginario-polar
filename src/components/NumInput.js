import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export function NumInput({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      keyboardType="numeric"
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
    ></TextInput>
  )
}

const styles = StyleSheet.create({
  input: {
    textAlign: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 5,
    height: 50,
    fontSize: 36,
    fontWeight: '100',
    borderWidth: 2,
    borderColor: '#141414',
    width: '35%',
    backgroundColor: '#ebebeb'
  }
})
