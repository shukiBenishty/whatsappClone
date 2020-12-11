import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


import ChatListItem from '../components/ChatListItem';
import { ChatRoom } from '../types';


import {chatRooms} from "../data"

export default function ChatsScreen() {
  return (
    <FlatList
      style={styles.container}
      data={chatRooms}
      renderItem={({item}) => (
        <ChatListItem onPress={()=>{}} chatRoom={item}/>
        )}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
