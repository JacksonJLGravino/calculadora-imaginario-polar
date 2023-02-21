import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export function Counts({ onPress, equation }) {
  return (
    <TouchableOpacity style={styles.simbolos} onPress={onPress}>
      <Text style={styles.button}>{equation}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  simbolos: {
    marginHorizontal: 5,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 85,
    borderRadius: 20
  },
  button: {
    fontSize: 24,
    color: 'white'
  }
})
