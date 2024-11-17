import { FontAwesome5 } from "@expo/vector-icons"
import { Tabs } from "expo-router"

const TabsLayout = () => {
    return (
        <Tabs >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Chats",
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name="home" size={size} color="black" />
                    )
                }} />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name="user" size={size} color="black" />
                    )
                }} />


        </Tabs>
    )
}

export default TabsLayout