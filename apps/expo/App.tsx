import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <Provider>
      <StatusBar style="auto" />
      <NativeNavigation />
    </Provider>
  )
}
