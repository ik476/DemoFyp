import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"
import InputField from '../components/InputField'
import Button from '../components/Button'
import Options from '../components/Options'

const LoginScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "#121212" }}>

            <TouchableOpacity style={{ width: 327, alignSelf: "center", marginTop: '2%' }}>
                <Entypo name='chevron-thin-left' color={'FFFFFFDE'} size={24} />
                {/* <Entypo name={'chevron-thin-left'} color={'#FFFFFFDE'} size={24} /> */}
            </TouchableOpacity>

            <Text style={{ marginTop: '10%', width: 327, alignSelf: "center", fontSize: 32, fontFamily: "lato", fontWeight: "700" }}>Login</Text>
            <View style={{ marginTop: "5%" }}><InputField txt="username" /></View>
            <View style={{ marginTop: "5%" }}><InputField txt="password" /></View>
        
            <View style={{marginTop:"15%", marginBottom:"15%"}}><Button txt='login' /></View>

            <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row" , marginBottom:"15%"}}>
                <View style={{ borderColor: "#979797", width: "40%", borderWidth: 0.5, height: 0 }}></View>
                <Text style={{ marginLeft: 5, marginRight: 5 }}>or</Text>
                <View style={{ borderColor: "#979797", width: "40%", borderWidth: 0.5, height: 0 }}></View>
            </View>

            <Options txt='Login with Google' />

            <View style={{marginTop:"5%", marginBottom:"5%"}}><Options txt='Login with Apple' /></View>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ marginRight: 5, fontFamily: "lato", fontWeight: "400", fontSize: 12, lineHeight: 18.06 }}>Don't have an account?</Text>
                <TouchableOpacity style={{ borderBottomWidth: 1, borderColor: "#ffffff" }}>
                    <Text style={{ color: "#ffffff", fontFamily: "lato", fontWeight: "400", fontSize: 12, lineHeight: 18.06 }}>Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default LoginScreen