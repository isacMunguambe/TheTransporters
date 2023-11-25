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
  const [nome, setNome] = useState("");
  const [contacto, setContacto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/miniLogo.png")} />
      <View>
      <Text style={styles.txtTittle}>Registo</Text>
      </View>
      <Text style={styles.txtSubTittle}>Junte-se à nossa comunidade para viagens mais seguras e informadas. Registre-se agora!</Text>

      <Text style={styles.textAboveInputs}>Nome:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Seu Nome"
          placeholderTextColor="#003f5c"
          onChangeText={(e) => setNome(e)}
        />
      </View>
      <Text style={styles.textAboveInputs}>Contacto</Text>
      <View style={styles.inputViewContacto}>
        <View style={styles.txtCodigoinputView}>
          <TextInput
            style={styles.txtCodigo}
            placeholder="258"
            placeholderTextColor="#003f5c"
          />
        </View>
        <View style={styles.txtNumeroinputView}>
          <TextInput
            style={styles.txtNumero}
            placeholder="81 234 5678"
            placeholderTextColor="#003f5c"
            onChangeText={(e) => setContacto(e)}
          />
        </View>
      </View>

      <Text style={styles.textAboveInputs}>Palavra-Passe:</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="****"
          placeholderTextColor="#003f5c"
          onChangeText={(e) => setPassword(e)}
        />
      </View>
      
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Registo2')}>
        <Text style={styles.loginText}>Seguinte</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.forgot_button} onPress={() => navigation.navigate('Login')}>
        <Text >Ja está registado?
          <Text style={styles.txtJaRegistado}> Entrar.</Text>
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
  txtCodigoinputView: {
    backgroundColor: "#fff",
    borderColor: '#9FC5B3',
    borderWidth: 1,
    width: "25%",
    height: 45,
    marginBottom: 12,
    alignItems: "left",
    fontSize: 14,
  },
  txtCodigo: {
    backgroundColor: "#fff",
    borderColor: '#9FC5B3',
    borderWidth: 1,
    paddingLeft:20,
    width: "100%",
    height: 45,
    fontSize: 14,
  },
  txtNumeroinputView: {
    backgroundColor: "#fff",
    borderColor: '#9FC5B3',
    borderWidth: 1,
    width: "70%",
    height: 45,
    marginBottom: 12,
    alignItems: "left",
    fontSize: 14,
  },
  txtNumero: {
    backgroundColor: "#fff",
    borderColor: '#9FC5B3',
    borderWidth: 1,
    width: "100%",
    paddingLeft:20,
    height: 45,
    fontSize: 14,
  },
  textAboveInputs: {
    color: '#666666',
    width: "85%",
    marginLeft: 35,
    marginBottom:8,
  },
  txtTittle: {
    color: '#666666',
    width: "85%",
    marginBottom: 18,
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