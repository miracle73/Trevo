import { Stack } from "expo-router"
import { OverlayProvider, Chat } from "stream-chat-expo"
import { StreamChat } from "stream-chat"
import { useEffect } from "react"


const client = StreamChat.getInstance("p645zscbcfq3")
const HomeLayout = () => {
    useEffect(() => {
        const connect = async () => {
            await client.connectUser(
                {
                    id: "jlahey",
                    name: "Jim Lahey",
                    image: "https://i.imgur.com/fR9Jz14.png"
                },
                client.devToken("jlahey")
            );
            // const channel = client.channel("messaging", "the_park", {
            //     name: "The Park"
            // })
            // await channel.watch();

        }
        connect();
    })
    return (
        <OverlayProvider>
            <Chat client={client}>
                <Stack />
        </Chat>

        </OverlayProvider> 
    )
}

export default HomeLayout