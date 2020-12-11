import React from "react";
import { Image } from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";

import { ChatRoom } from "../../types";
import { View, Text } from "../Themed";
import style from "./style"

export type ChatListItemProps = {
    chatRoom: ChatRoom;
    onPress: (event: any) => void
}


const ChatListItem = (props: ChatListItemProps) => {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
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
        </TouchableNativeFeedback>
    )
}


export default ChatListItem

