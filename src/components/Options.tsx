import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

interface option {
    txt: string;
    img: any;
}

const Options = ({ txt,img }: option) => {
    return (
        <TouchableOpacity style={{ width: 327, height: 48, borderRadius: 4, borderWidth: 1, borderColor: "#8875FF", justifyContent:"center", alignItems:"center", alignSelf:"center" }}>
            <View style={{ flexDirection: "row" }}>
                <Image style={{width:24, height:24 }} source={img}/>
                <Text style={{ marginLeft: 10, color: "#FFFFFFDE", fontFamily: "lato", fontWeight: "400", fontSize: 16, lineHeight: 24.08 }}>{txt}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Options