import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Btn } from '../components/Btn'
import { Counts } from '../components/Counts'
import { Header } from '../components/Header'
import { NumInput } from '../components/NumInput'
import { SelectedButton } from '../components/SelectedButton'

export function Imaginary() {
  const navigation = useNavigation()
  const [num1, setNum1] = useState(0)
  const [img1, setImg1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [img2, setImg2] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [resultado2, setResultado2] = useState('+' + 0)
  const [complex, setComplex] = useState(0)
  const [degResult, setDegResult] = useState(0)

  const x = parseFloat(num1)
  const y = parseFloat(img1)
  const tras1num1 = Math.hypot(x, y)
  const tras2num1 = Math.atan2(y, x) * (180 / Math.PI)

  const a = parseFloat(num2)
  const b = parseFloat(img2)
  const tras1num2 = Math.hypot(a, b)
  const tras2num2 = Math.atan2(b, a) * (180 / Math.PI)

  const somar = () => {
    let result = x + a
    setResultado(result)
    let resultI = y + b
    if (resultI >= 0) {
      setResultado2('+' + resultI)
    } else {
      setResultado2(resultI)
    }
    let trasResult = Math.hypot(result, resultI)
    let trasResultDeg = Math.atan2(resultI, result) * (180 / Math.PI)
    setComplex(trasResult)
    setDegResult(trasResultDeg)
  }

  const subtrair = () => {
    let result = x - a
    setResultado(result)
    let resultI = y - b
    if (resultI >= 0) {
      setResultado2('+' + resultI)
    } else {
      setResultado2(resultI)
    }
    let trasResult = Math.hypot(result, resultI)
    let trasResultDeg = Math.atan2(resultI, result) * (180 / Math.PI)
    setComplex(trasResult)
    setDegResult(trasResultDeg)
  }

  const multiplicar = () => {
    let result = x * a - y * b
    setResultado(result)
    let resultI = x * b + y * a
    if (resultI >= 0) {
      setResultado2('+' + resultI)
    } else {
      setResultado2(resultI)
    }
    let trasResult = Math.hypot(result, resultI)
    let trasResultDeg = Math.atan2(resultI, result) * (180 / Math.PI)
    setComplex(trasResult)
    setDegResult(trasResultDeg)
  }

  const dividir = () => {
    let c = b - 2 * b
    let d = a * a + b * b
    let result = (x * a - y * c) / d
    setResultado(result)
    let resultI = (x * c + y * a) / d
    if (resultI >= 0) {
      setResultado2('+' + resultI)
    } else {
      setResultado2(resultI)
    }
    let trasResult = Math.hypot(result, resultI)
    let trasResultDeg = Math.atan2(resultI, result) * (180 / Math.PI)
    setComplex(trasResult)
    setDegResult(trasResultDeg)
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <SelectedButton nome="Imaginary" />
        <Btn onPress={() => navigation.navigate('polar')} nome="Polar" />
      </View>
      <View style={styles.numberContainer}>
        <Text style={{ fontSize: 24 }}>Z1=</Text>
        <NumInput placeholder="Re" value={num1} onChangeText={setNum1} />
        <NumInput placeholder="Im" value={img1} onChangeText={setImg1} />
        <Text style={{ fontSize: 36 }}>i</Text>
      </View>
      <Text>
        {tras1num1} {'<' + tras2num1}°
      </Text>
      <View style={styles.numberContainer}>
        <Text style={{ fontSize: 24 }}>Z2=</Text>
        <NumInput placeholder="Re" value={num2} onChangeText={setNum2} />
        <NumInput placeholder="Im" value={img2} onChangeText={setImg2} />
        <Text style={{ fontSize: 36 }}>i</Text>
      </View>
      <Text>
        {tras1num2} {'<' + tras2num2}°
      </Text>

      <View style={styles.countsContainer}>
        <Counts equation="Z1+Z2" onPress={() => somar()} />
        <Counts equation="Z1-Z2" onPress={() => subtrair()} />
        <Counts equation="Z1*Z2" onPress={() => multiplicar()} />
        <Counts equation="Z1/Z2" onPress={() => dividir()} />
      </View>

      <Text style={{ padding: 10 }}>
        {resultado} {resultado2}i
      </Text>
      <Text style={{ padding: 10, marginBottom: 30 }}>
        {complex} {'<' + degResult}°
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  numberContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center'
  },
  countsContainer: {
    flexDirection: 'row',
    height: '10%',
    alignItems: 'center'
  }
})
