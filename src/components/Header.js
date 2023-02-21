import React from 'react'
import { Text, StyleSheet } from 'react-native'

export function Header() {
  return <Text style={styles.header}>Imaginary Number Calculator</Text>
}

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    textAlign: 'center'
  }
})
