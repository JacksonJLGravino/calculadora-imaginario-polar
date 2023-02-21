import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Imaginary } from '../pages/Imaginary'
import { Polar } from '../pages/Polar'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="imaginary" component={Imaginary} />
      <Screen name="polar" component={Polar} />
    </Navigator>
  )
}
