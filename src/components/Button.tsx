import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface button{
    txt: string;
}

const Button = ({txt}:button) => {
    return (
        
        <TouchableOpacity style={{alignSelf:"center", backgroundColor: "#8687E780", width: 327, height: 48 , justifyContent:"center", alignItems:"center"}}>
            <Text style={{ color: "#FFFFFF80", fontFamily: "lato", fontWeight: "400", fontSize: 16, lineHeight: 24.08, textTransform:"capitalize" }}>{txt}</Text>
        </TouchableOpacity>
    )
}

export default Button