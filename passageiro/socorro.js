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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Socorro() {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.txtTittle}>Central de Socorro</Text>
                </View>
                <Text style={styles.txtSubTittle}>Contactos de Emergência</Text>

                <View style={styles.inputViewContacto}>
                    <View style={styles.viewIconContacto}>
                        <Icon name="home-outline" style={styles.txtCodigo} size={30} color="#900" />
                    </View>
                    <View style={styles.viewIconName}>
                        <Text style={styles.iconName}>Bombeiros</Text>
                    </View>
                    <View style={styles.viewNumero}>
                        <Text style={styles.Numero}>198</Text>
                    </View>
                </View>
                <View style={styles.inputViewContacto}>
                    <View style={styles.viewIconContacto}>
                        <Icon name="home-outline" style={styles.txtCodigo} size={30} color="#900" />
                    </View>
                    <View style={styles.viewIconName}>
                        <Text style={styles.iconName}>Polícia</Text>
                    </View>
                    <View style={styles.viewNumero}>
                        <Text style={styles.Numero}>112</Text>
                    </View>
                </View>
                <View style={styles.inputViewContacto}>
                    <View style={styles.viewIconContacto}>
                        <Icon name="home-outline" style={styles.txtCodigo} size={30} color="#900" />
                    </View>
                    <View style={styles.viewIconName}>
                        <Text style={styles.iconName}>Ambulância</Text>
                    </View>
                    <View style={styles.viewNumero}>
                        <Text style={styles.Numero}>198</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.googleLogin}>
                    <Text style={styles.loginGoogleText}>
                        Adicionar Contacto</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputViewContacto}>
                <TouchableOpacity style={styles.makeCall}>
                    <Text style={styles.loginGoogleText}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mandarAlerta}>
                    <Text style={styles.AlertaText}>Mandar Alerta</Text>
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
        paddingLeft: '5%',
        paddingTop: '8%',
        justifyContent: 'space-between',
    },
    image: {
        marginBottom: 30,
    },
    inputView: {
        backgroundColor: "#fff",
        borderColor: '#9FC5B3',
        borderWidth: 1,
        width: "95%",
        height: 45,
        marginBottom: 12,
        alignItems: "left",
        fontSize: 14,
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
        color: "#4E9373",
    },
    AlertaText: {
        fontSize: 16,
        color: "#fff",
    },
    makeCall: {
        width: "48%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#EBEBEB",
        marginBottom: 15,
        borderRadius: 8,
        marginRight:'1%'
    },
    mandarAlerta: {
        width: "48%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4E9373",
        marginBottom: 15,
        borderRadius: 8,
        marginLeft:'1%'
    },
    viewIconContacto: {
        backgroundColor: "#fff",
        borderColor: '#9FC5B3',
        width: "15%",
        height: 45,
        marginBottom: 8,
        alignItems: "left",
        fontSize: 14,
    },
    txtCodigo: {
        paddingLeft: '15%',
        width: "100%",
        height: 45,
        textAlignVertical: 'center',
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
        width: '95%'
    },
});