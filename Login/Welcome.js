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

export default function Welcome({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/miniLogo.png")} />
      <View>
        <Text style={styles.txtTittle}>FAMBA MAHOMBE</Text>
      </View>
      <Text style={styles.txtSubTittle}>
        Junte-se à nossa comunidade para viagens mais seguras e informadas. 
        <Text style={styles.txtJaRegistado}>Registre-se agora!</Text>
      </Text>
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.loginBtn} 
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.registarPassageiro}>Registar como Passageiro!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginMotorista}>
        <Text style={styles.registarMotorista}>Registar como Motorista</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.textAboveInputs}>
        <Text>Já estou registado? <Text style={styles.txtJaRegistado}> Entrar</Text> </Text>
      </TouchableOpacity>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: '25%'
  },
  image: {
    marginBottom: 0,
  },
  txtTittle: {
    color: '#666666',
    width: "85%",
    marginBottom: 18,
    alignItems: "center",
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtSubTittle: {
    color: '#666666',
    width: "85%",
    marginBottom: 70,
    marginTop: 50,
    fontSize: 32,
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
  registarPassageiro: {
    fontSize: 16,
    color: "#fff",
  },
  loginMotorista: {
    width: "85%",
    height: 50,
    borderWidth: 1,
    borderColor: '#106E42',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  registarMotorista: {
    fontSize: 16,
    color: "#106E42",
  },
  textAboveInputs: {
    color: '#666666',
    width: "85%",
    marginBottom: 10,
    alignItems: "left",
  },
  txtJaRegistado: {
    color: '#106E42',
  },
});