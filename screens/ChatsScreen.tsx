import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


import ChatListItem from '../components/ChatListItem';
import { ChatRoom } from '../types';


const rooms: ChatRoom[] = [
  {
    id: "1",
    name: "Test",
    messages: [{id: "1", content: "test", sendAt: "Yesterday"}],
    users: [{id: "1", name:"t"}]
  },
  {
    id: "2",
    name: "Test",
    messages: [{id: "2", content: "test 2", sendAt: "Yesterday"}],
    users: [{id: "2", name:"t 2"}]
  },
  {
    id: "3",
    name: "Test",
    messages: [{id: "2", content: "test 2", sendAt: "Yesterday"}],
    users: [{id: "2", name:"t 2"}]
  },
  {
    id: "4",
    name: "Test",
    messages: [{id: "2", content: "test 2", sendAt: "Yesterday"}],
    users: [{id: "2", name:"t 2"}]
  },
  {
    id: "5",
    name: "Test",
    messages: [{id: "2", content: "test 2", sendAt: "Yesterday"}],
    users: [{id: "2", name:"t 2"}]
  },
  {
    id: "6",
    name: "Test",
    messages: [{id: "2", content: "test 2", sendAt: "Yesterday"}],
    users: [{id: "2", name:"t 2"}]
  },
  {
    id: "7",
    name: "Test",
    messages: [{id: "2", content: "test 2", sendAt: "Yesterday"}],
    users: [{id: "2", name:"t 2"}]
  },
  {
    id: "8",
    name: "Test",
    messages: [{id: "2", content: "test 2", sendAt: "Yesterday"}],
    users: [{id: "2", name:"t 2"}]
  }
]

export default function ChatsScreen() {
  return (
    <FlatList
      style={styles.container}
      data={rooms}
      renderItem={({item}) => (
        <ChatListItem chatRoom={item}/>
        )}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
