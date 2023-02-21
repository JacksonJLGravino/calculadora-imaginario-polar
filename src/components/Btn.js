import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export function Btn({ onPress, nome }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{nome}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    borderRadius: 40,
    width: 130,
    borderColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#141414'
  },
  btnText: {
    color: 'white',
    fontSize: 18
  }
})
