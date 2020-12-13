import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Image,View } from "react-native";
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Text } from "../components/Themed";


export type ChatScreenProps = {
    route: {
        params: Object
    }    
}


const ChatScreen = (props: ChatScreenProps)  => {
    console.log(props.route.params)
    return( 
    <View>
        <Text>Chat</Text>
    </View>)
}

export default ChatScreen

export const  ChatScreenHeader = (props) => {
    console.log(props);
    
    return (
      <TouchableNativeFeedback onPress={() => {}}>
        <View style={style.continer} >
        <Ionicons style={style.icon}  name="arrow-back" size={24} color="#fff" />
        <Image
            style={style.avatar}
            source={props.imageUrl ?
                { uri: props.imageUrl } :
                require("../assets/images/avatar.jpg")} />
      </View>
      </TouchableNativeFeedback>
    )
  }


const style =  StyleSheet.create({
    continer : {
        flexDirection: "row",
        backgroundColor: "transparent"
    },
    icon: {
        alignSelf: "center",
    },
    avatar: { 
        width: 35,
        height: 35,
        borderRadius: 20,
        
    },
    name: {
        flex: 3,
        fontSize: 17
    },
})