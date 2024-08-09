import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface button{
    txt: string;
    handleEmail(text:string):any;
    handlePassword(text:string):any;
}

const Button = ({txt, handleEmail, handlePassword}:button) => {

    const emty=()=>{
        handleEmail('');
        handlePassword('');
    }

    return (
        
        <TouchableOpacity style={{alignSelf:"center", backgroundColor: "#8687E780", width: 327, height: 48 , justifyContent:"center", alignItems:"center"}}
        onPress={emty}
        >
            <Text style={{ color: "#FFFFFF80", fontFamily: "lato", fontWeight: "400", fontSize: 16, lineHeight: 24.08, textTransform:"capitalize" }}>{txt}</Text>
        </TouchableOpacity>
    )
}

export default Button