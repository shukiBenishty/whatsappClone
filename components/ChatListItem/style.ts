import { StyleSheet } from "react-native";

export default StyleSheet.create({
    continer : {
        flexDirection: "row",
        width: "93%" ,
        marginLeft: 13,  
        marginBottom: 10 
    },
    infoContiner : {
        paddingTop: 10,
        flex: 5,
        flexDirection: "column",
        borderTopWidth: 0.5,
        borderTopColor: "#ddd",
    },
    firstCol: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    secondCol : {
        flex: 1,
    },
    avatar: { 
        flex: 1,
        width: 56,
        height: 56,
        marginRight: 10,
        marginTop: 10,
        borderRadius: 55,
        
    },
    msg: {
        color: "#888",
        fontSize: 15
    },
    name: {
        flex: 3,
        fontSize: 17
    },
    date: {
        textAlign: "right",
        flex: 1,
        fontSize: 12,
        color: "#888"
    }
})