import React from "react";
import { Image } from "react-native";

import { ChatRoom } from "../../types";
import { View, Text } from "../Themed";
import style from "./style"
// import avatar from "../../assets/images/avatar.jpg"
export type ChatListItemProps = {
    chatRoom: ChatRoom;
}


const ChatListItem = (props: ChatListItemProps) => {
    return (
        <View style={style.continer} >
            <Image
                style={style.avatar}
                source={props.chatRoom.imageUrl ?
                    { uri: props.chatRoom.imageUrl } :
                    require("../../assets/images/avatar.jpg")} />
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

