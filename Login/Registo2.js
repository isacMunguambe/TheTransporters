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
  ScrollView,
} from "react-native";

export default function Registo({ navigation }) {
  const [grupoSanguineo, setGrupoSanguineo] = useState("");
  const [alergias, setAlergias] = useState("");
  const [condMedicas, setCondMedicas] = useState("");
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/miniLogo.png")} />
      <View>
      <Text style={styles.txtTittle}>Dados Médicos</Text>
      </View>
      <Text style={styles.txtSubTittle}>Forneça informações  médicos para garantir uma resposta eficaz em casos de emergência.</Text>

      <Text style={styles.textAboveInputs}>Grupo Sanguíneo:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Seu Nome"
          placeholderTextColor="#003f5c"
          onChangeText={(e) => setGrupoSanguineo(e)}
        />
      </View>
      <Text style={styles.textAboveInputs}>Alergias:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Rinite"
          placeholderTextColor="#003f5c"
          onChangeText={(e) => setCondMedicas(e)}
        />
      </View>
      <Text style={styles.textAboveAlergia}>Escreva cada alergia e separe com uma vírgula.</Text>

      <Text style={styles.textAboveInputs}>Condições Médicas:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder=""
          placeholderTextColor="#003f5c"
          onChangeText={(e) => setCondMedicas(e)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Registo2')}>
        <Text style={styles.loginText}>Registar</Text>
      </TouchableOpacity>
      
    </View>
  );
}

function Registo2() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  inputViewContacto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '85%'
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: '20%'
  },
  image: {
    marginBottom: 30,
  },
  inputView: {
    backgroundColor: "#fff",
    borderColor: '#9FC5B3',
    borderWidth: 1,
    width: "85%",
    height: 45,
    marginBottom: 12,
    alignItems: "left",
    fontSize: 14,
  },
  textAboveInputs: {
    color: '#666666',
    width: "85%",
    marginLeft: 35,
    marginBottom:8,
  },
  textAboveAlergia: {
    color: '#666666',
    width: "85%",
    marginLeft: 35,
    marginBottom:10,
    fontSize:10,
  },
  txtTittle: {
    color: '#666666',
    width: "85%",
    marginBottom: 18,
    alignItems: "left",
    fontSize: 24,
    fontWeight: 'bold',
  },
  txtSubTittle: {
    color: '#666666',
    width: "85%",
    marginBottom: 25,
    fontSize: 16,
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
    marginTop:10,
  },
  loginText: {
    fontSize: 16,
    color: "#fff",
  },
  googleLogin: {
    width: "85%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderColor: '#666666',
    borderWidth: 1,
  },
  loginGoogleText: {
    fontSize: 16,
    color: "#666666",
  },
  txtJaRegistado: {
    color: '#106E42',
  },
});