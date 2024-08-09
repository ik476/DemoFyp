import { View, Text,TextInput } from 'react-native'
import React, { useState } from 'react'

interface eif{
    txt: string;
    email:string;
    handleEmail(text:string):any;
}


const EmailinputField = ({txt,email,handleEmail}:eif) => {
   
    return (
        <View style={{ width: 327, alignSelf: "center" }}>
            <Text style={{ fontFamily: "lato", fontWeight: "400", fontSize: 16, textTransform: "capitalize", marginBottom: 10, color:"#FFFFFFDE" }}>{txt}</Text>

            <TextInput style={{ height: 48, borderRadius: 4, borderWidth: 0.8, backgroundColor: "#1D1D1D", borderColor: "#979797" ,paddingLeft:15, color:"#FFFFFFDE"}} 
                       placeholder='Enter your Username' 
                       placeholderTextColor={'#979797'}
                       value={email}
                       onChangeText={(text)=>handleEmail(text)} />
        </View>
    )
}

export default EmailinputField