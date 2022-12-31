import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import OrderDetails from './src/screens/OrderDetails';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';




export default function App() {
  return (
    <NavigationContainer>
      
        <RootNavigator />
        <StatusBar style="light" />
        
    </NavigationContainer>
  );
}
