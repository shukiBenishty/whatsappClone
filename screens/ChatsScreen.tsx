import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';


import ChatListItem from '../components/ChatListItem';
import { ChatRoom } from '../types';


import {chatRooms} from "../data"
import { useNavigation } from '@react-navigation/native';

export default function ChatsScreen() {
  const navigation = useNavigation()
  return (
    <FlatList
      style={styles.container}
      data={chatRooms}
      renderItem={({item}) => (
        <ChatListItem onPress={()=>{navigation.navigate("Chat", {...item})}} chatRoom={item}/>
        )}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  }
});
