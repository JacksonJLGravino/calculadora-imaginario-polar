import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export function SelectedButton({ nome }) {
  return (
    <>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{nome}</Text>
      </TouchableOpacity>
    </>
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
    justifyContent: 'center'
  },
  btnText: {
    color: '#141414',
    fontSize: 18
  }
})
