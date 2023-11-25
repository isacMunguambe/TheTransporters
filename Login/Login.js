import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/miniLogo.png")} /> 
      <Text style={styles.txtTittle}>Entrar no FH</Text>
      <Text style={styles.txtSubTittle}>Bem-vindo de volta!</Text>
      <StatusBar style="auto" />
      <Text style={styles.textAboveInputs}>Insira:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <Text style={styles.textAboveInputs}>Palavra-passe:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="****"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.forgot_button} onPress={() => navigation.navigate('Registo')}>
        <Text >Ainda não está registado? 
          <Text style={styles.txtJaRegistado}>Criar conta.</Text>
          </Text> 
      </TouchableOpacity> 
      <Text>Ou</Text> 
      <TouchableOpacity style={styles.googleLogin}>
        <Text style={styles.loginGoogleText}>Entrar com Google</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop:'25%'
  },
  image: {
    marginBottom: 30,
  },
  inputView: {
    backgroundColor: "#fff",
    borderColor:'#9FC5B3',
    borderWidth: 1,
    width: "85%",
    height: 45,
    marginBottom: 20,
    alignItems: "left",
    fontSize:14,
  },
  textAboveInputs: {
    color: '#666666',
    width: "85%",
    marginBottom: 10,
    marginLeft:35,
  },
  txtTittle: {
    color: '#666666',
    width: "85%",
    marginBottom: 18,
    fontSize:24,
    fontWeight: 'bold',
  },
  txtSubTittle: {
    color: '#666666',
    width: "85%",
    marginBottom: 25,
    fontSize:16,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
  forgot_button: {
    width: "85%",
    marginBottom: 15,
    alignItems: "left",
  },
  loginBtn: {
    width: "85%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    backgroundColor: "#106E42",
    marginBottom: 10,
  },
  loginText:{
    fontSize:16,
    color:"#fff",
  },
  googleLogin: {
    width: "85%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderColor:'#666666',
    borderWidth: 1,
  },
  loginGoogleText:{
    fontSize:16,
    color:"#666666",
  },
  txtJaRegistado: {
    color: '#106E42',
  },
});