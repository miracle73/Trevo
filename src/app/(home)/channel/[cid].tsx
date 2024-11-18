import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Channel as ChannelType } from "stream-chat"
import { useLocalSearchParams } from 'expo-router';
import { ChannelList, Channel, MessageList, MessageInput, useChatContext } from 'stream-chat-expo'

const index = () => {
  const [channel, setChannel] = useState<ChannelType | null>(null);
  const { cid } = useLocalSearchParams<{cid: string}>();
  const { client } = useChatContext();

  useEffect(() => {
    const fetchChannel = async () => {
      const channels = await client.queryChannels({ cid });
      setChannel(channels[0])
    }
    fetchChannel();
  }, [cid])
  if (!channel) {
    return (
      <ActivityIndicator />
    )
  
  }
  return (
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
  )
}

export default index