import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

interface InputFieldProps {
    txt: string;
    password:string;
    handlePassword(text:string):any;
}

interface inutputF {
    // password: string;
    showPassword: boolean;
}


const InputField = ({ txt,password,handlePassword  }: InputFieldProps) => {

    // const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(true);

    // const handleInput = (e: React.ChangeEvent<any>): void => {
    //     setPassword(e.target.value);
    // }

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View style={{ width: 327, alignSelf: "center" }}>
            <Text style={{ fontFamily: "lato", fontWeight: "400", fontSize: 16, textTransform: "capitalize", marginBottom: 10, color:"#FFFFFFDE" }}>{txt}</Text>
            <View style={{ alignItems: "center", justifyContent: "space-between", paddingRight: 10, flexDirection: "row", paddingLeft: 10, height: 48, borderRadius: 4, borderWidth: 0.8, backgroundColor: "#1D1D1D", borderColor: "#979797" }}>
                <TextInput style={{width:"90%", color:"#FFFFFFDE" }} placeholder='Enter your Password' placeholderTextColor={'#979797'} value={password} onChangeText={(text) => handlePassword(text)} secureTextEntry={showPassword} />
                <TouchableOpacity>
                    {showPassword ? (<Entypo name='eye-with-line' size={24} color={"#979797"} onPress={handleShowPassword} />) :
                        (<Entypo name='eye' size={24} color={"#979797"} onPress={handleShowPassword} />)}
                </TouchableOpacity>


            </View>
            {/* <TextInput style={{ height:48, borderRadius: 4, borderWidth: 0.8, backgroundColor: "#1D1D1D", borderColor: "#979797" }} placeholder='Enter your' placeholderTextColor={'#979797'} /> */}
        </View>
    )
}

export default InputField