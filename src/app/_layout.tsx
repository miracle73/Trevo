import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar'

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  '(NOBRIDGE) ERROR', // Ignore specific error message
  'AxiosError: Network Error', // Ignore related Axios errors
]);


const RootLayout = () => {
    return (
        <>
            <StatusBar style="dark" />
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack screenOptions={{ headerShown: false }} />
            </GestureHandlerRootView>
        </>



    )


}

export default RootLayout