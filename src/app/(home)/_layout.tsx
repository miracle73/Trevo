import { Stack } from "expo-router"
import ChatProvider from "../../providers/ChatProvider"



const HomeLayout = () => {

    return (
        <ChatProvider>
            <Stack  >
                {/* screenOptions={{ headerShown: false }} */}
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="channel" />
            </Stack>
        </ChatProvider>

    )
}

export default HomeLayout