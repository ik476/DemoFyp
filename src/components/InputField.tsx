import { View, Text, TextInput } from 'react-native'
import React from 'react'

interface InputFieldProps {
    txt: string;
}

const InputField = ({ txt }: InputFieldProps) => {
    return (
        <View style={{width: 327, alignSelf:"center"}}>
            <Text style={{ fontFamily: "lato", fontWeight: "400", fontSize: 16, textTransform:"capitalize", marginBottom:10 }}>{txt}</Text>
            <TextInput style={{ height:48, borderRadius: 4, borderWidth: 0.8, backgroundColor: "#1D1D1D", borderColor: "#979797" }} placeholder='Enter your' placeholderTextColor={'#979797'} />
        </View>
    )
}

export default InputField