import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    PermissionsAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker, Polyline } from 'react-native-maps';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Location from "expo-location";


export default function Inicio() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        // Request permission to access the device's location
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 5000, // Update every 5 seconds
                    distanceInterval: 10 // Update if the user moves by 10 meters
                },
                (newLocation) => {
                    setLocation(newLocation.coords);
                }
            );
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.inputViewContacto}>
                <View style={styles.viewIconContacto}>
                    <Image style={styles.image} source={require("../assets/miniLogo.png")} />
                </View>
                <View style={styles.topSettings}>
                    <Icon name="settings-outline" style={styles.txtCodigo} size={30} color="#6E6E6E" />
                </View>
            </View>

            <View style={styles.map2}>
                {location && (
                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        <Marker
                            coordinate={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }}
                            title="Current Location"
                        />
                    </MapView>
                )}
            </View>

            <View >
                <TouchableOpacity style={styles.mandarAlerta}>
                    <Text style={styles.AlertaText}>Iniciar Viagem</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#fff",
        paddingLeft: '0%',
        paddingTop: '8%',
        justifyContent: 'space-between',
    },
    image: {
        marginLeft: '10%',
    },
    map2: {
        width: '100%',
        height: '70%',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    inputView: {
        backgroundColor: "#fff",
        borderColor: '#9FC5B3',
        borderWidth: 1,
        width: "80%",
        height: 45,
        marginBottom: 12,
        alignItems: "left",
        fontSize: 14,
        marginLeft: '5%',
        marginRight: '2%',
    },
    topSettings: {
        backgroundColor: "#fff",
        borderColor: '#9FC5B3',
        borderWidth: 1,
        width: "10%",
        height: 45,
        marginTop:'2%'
    },
    textAboveInputs: {
        color: '#666666',
        width: "95%",
        marginLeft: 35,
        marginBottom: 8,
    },
    txtTittle: {
        color: '#666666',
        width: "95%",
        marginBottom: 18,
        fontSize: 20,
        fontWeight: 'bold',
    },
    txtSubTittle: {
        color: '#666666',
        width: "95%",
        marginBottom: 25,
        fontSize: 16,
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 10,
    },
    loginBtn: {
        width: "95%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        backgroundColor: "#106E42",
        marginBottom: 10,
        marginTop: 10,
    },
    googleLogin: {
        width: "95%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderColor: '#4E9373',
        borderWidth: 1,
        borderRadius: 8,
    },
    loginGoogleText: {
        fontSize: 16,
        color: "#6E6E6E",
        marginLeft: '3%'
    },
    cancelarText: {
        fontSize: 20,
        color: "#4E9373",
    },
    AlertaText: {
        fontSize: 16,
        color: "#fff",
    },
    makeCall: {
        width: "95%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EBEBEB",
        marginBottom: 15,
        borderRadius: 8,
        marginRight: '1%'
    },
    mandarAlerta: {
        width: "95%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#106E42",
        marginBottom: '3%',
        borderRadius: 8,
        marginLeft: '2%'
    },
    cancelarViagem: {
        width: "95%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        marginBottom: 15,
        borderRadius: 8,
        marginLeft: '20%',
        marginRight: '20%',
        borderWidth: 1,
        borderColor: '#4E9373',
    },
    viewIconContacto: {
        backgroundColor: "#fff",
        borderColor: '#9FC5B3',
        width: "15%",
        height: 45,
        alignItems: "left",
        fontSize: 14,
        marginTop:'2%',
        marginLeft:'5%'
    },
    txtCodigo: {
        width: "100%",
        height: 45,
    },
    viewIconName: {
        backgroundColor: "#fff",
        borderColor: '#9FC5B3',
        width: "40%",
        height: 45,
        marginBottom: 8,
        alignItems: "left",
        fontSize: 14,
    },
    iconName: {
        backgroundColor: "#fff",
        borderColor: '#9FC5B3',
        width: "100%",
        height: 45,
        fontSize: 14,
        textAlignVertical: 'center',
        paddingLeft: '5%'
    },
    viewNumero: {
        backgroundColor: "#fff",
        borderColor: '#9FC5B3',
        width: "45%",
        height: 45,
        marginBottom: 8,
        alignItems: "left",
        fontSize: 14,
    },
    Numero: {
        backgroundColor: "#fff",
        borderColor: '#9FC5B3',
        width: "100%",
        height: 45,
        fontSize: 14,
        textAlignVertical: 'center',
        textAlign: 'right',
    },
    inputViewContacto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '95%',
        marginTop: '2%'
    },
    tempoEstimado: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        width: '95%',
        marginBottom: '4%'
    },
});