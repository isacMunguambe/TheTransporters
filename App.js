import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from './Login/Login';
import Welcome from './Login/Welcome';
import Registo from './Login/Registo';
import Registo2 from './Login/Registo2';
import Socorro from './passageiro/socorro';
import bottomNav from './bottomNav';
import Viagem from './passageiro/viagem';
import Inicio from './passageiro/Inicio';

const Stack = createNativeStackNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const AutenticacaoNavigator = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Registo" component={Registo} />
        <Stack.Screen name="Registo2" component={Registo2} />
    </Stack.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Início" component={Inicio} />
    </Stack.Navigator>
  );
};

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => screenOptions(route, color),
    })}>
      <Tab.Screen options={{ headerShown: false }} name="Inicio" component={StackNavigator} />
      <Tab.Screen options={{ headerShown: false }} name="Modo Viagem" component={Viagem} />
      <Tab.Screen options={{ headerShown: false }} name="Socorro" component={Socorro} />
      <Tab.Screen options={{ headerShown: false }} name="Relatorio" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Inicio':
      iconName = 'home-outline';
      break;
    case 'ModoViagem':
      iconName = 'cog-outline';
      break;
    default:
      iconName = 'cog-outline';
      break;
  }

  return <Icon name={iconName} color={color} size={24} />;
};

export default function App() {
  return (
    <NavigationContainer>
    {false ? (
      <BottomTabNavigator />
    ) : (
      <AutenticacaoNavigator />
    )}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
