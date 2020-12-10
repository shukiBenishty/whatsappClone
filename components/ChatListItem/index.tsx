import React from "react";
import { Image } from "react-native";

import { ChatRoom } from "../../types";
import { View, Text } from "../Themed";
import style from "./style"

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}


const ChatListItem = (props: ChatListItemProps) => {
    return (
        <View style={style.continer} >
            <Image style={style.avatar} source={{ uri: "https://abledbody.com/wp-content/uploads/2010/03/jake_sully_avatar_2009-normal.jpg" }} />
            <View style={style.infoContiner}>
                <View style={style.firstCol}>
                    
                        <Text style={style.name}>{props.chatRoom.name}</Text>
                
                        <Text style={style.date}>{props.chatRoom.messages?.[props.chatRoom.messages?.length - 1].sendAt}</Text>

                </View>
                <View style={style.secondCol}>
                    <Text style={style.msg}>{props.chatRoom.messages?.[props.chatRoom.messages?.length - 1].content}</Text>
                </View>
            </View>
        </View>
    )
}


export default ChatListItem

