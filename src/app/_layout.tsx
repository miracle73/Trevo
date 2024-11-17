import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar'




const RootLayout = () => {
    return (
        <>
            <StatusBar style="dark" />
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack />
            </GestureHandlerRootView>
        </>



    )


}

export default RootLayout