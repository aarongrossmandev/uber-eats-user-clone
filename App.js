import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports';
// import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig);




function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
        <StatusBar style="light" />
        
    </NavigationContainer>
  );
}

export default withAuthenticator(App);
