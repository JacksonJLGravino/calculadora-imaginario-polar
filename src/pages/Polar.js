import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Btn } from '../components/Btn'
import { Counts } from '../components/Counts'
import { Header } from '../components/Header'
import { NumInput } from '../components/NumInput'
import { SelectedButton } from '../components/SelectedButton'

export function Polar() {
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
  const x1 = x * Math.cos(y * (Math.PI / 180))
  const y1 = x * Math.sin(y * (Math.PI / 180))

  const a = parseFloat(num2)
  const b = parseFloat(img2)
  const a1 = a * Math.cos(b * (Math.PI / 180))
  const b1 = a * Math.sin(b * (Math.PI / 180))

  const somar = () => {
    let result = x1 + a1
    setResultado(result)
    let resultI = y1 + b1
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
    let result = x1 - a1
    setResultado(result)
    let resultI = y1 - b1
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
    let result = x1 * a1 - y1 * b1
    setResultado(result)
    let resultI = x1 * b1 + y1 * a1
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
    let c = b1 - 2 * b1
    let d = a1 * a1 + b1 * b1
    let result = (x1 * a1 - y1 * c) / d
    setResultado(result)
    let resultI = (x1 * c + y1 * a1) / d
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
        <Btn
          onPress={() => navigation.navigate('imaginary')}
          nome="Imaginary"
        />
        <SelectedButton nome="Polar" />
      </View>

      <View style={styles.numberContainer}>
        <Text style={{ fontSize: 24 }}>Z1=</Text>
        <NumInput placeholder="Re" value={num1} onChangeText={setNum1} />
        <Text style={{ fontSize: 36 }}>{'<'}</Text>
        <NumInput placeholder="θ" value={img1} onChangeText={setImg1} />
        <Text style={{ fontSize: 36 }}>i</Text>
      </View>
      <Text>
        {x1}+({y1}i)
      </Text>

      <View style={styles.numberContainer}>
        <Text style={{ fontSize: 24 }}>Z2=</Text>
        <NumInput placeholder="Re" value={num2} onChangeText={setNum2} />
        <Text style={{ fontSize: 36 }}>{'<'}</Text>
        <NumInput placeholder="θ" value={img2} onChangeText={setImg2} />
        <Text style={{ fontSize: 36 }}>i</Text>
      </View>
      <Text style={{ paddingBottom: 20 }}>
        {a1}+({b1}i)
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
