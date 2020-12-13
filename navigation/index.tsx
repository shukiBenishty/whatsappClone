import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';

import Colors from '../constants/Colors';


import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import ChatScreen, { ChatScreenHeader } from '../screens/ChatScreen';
import { Text } from '../components/Themed';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerStyle:{
          backgroundColor: Colors.light.tint,
          shadowOpacity: 0,
          elevation: 0
        },
        headerTitleAlign: "left",
        headerTintColor: Colors.light.background
      }}>
      <Stack.Screen name="Root" 
        component={MainTabNavigator} 
        options={{
          title: "WhatsApp",
          headerRight: () => (
            <View style={{
              width: 60,
              backgroundColor: Colors.light.tint,
              flexDirection:"row",
              justifyContent: "space-between",
              marginRight: 10   
              
            }}>
              <Octicons name="search" size={22} color="white"/>
              <MaterialCommunityIcons name="dots-vertical" size={22}  color="white"/>
            </View>
          )
        }}
      />
      <Stack.Screen
        name="Chat"
        options={({ route }) => ({ 
          headerRight: () => (
            <View style={{
              width: 105,
              backgroundColor: Colors.light.tint,
              flexDirection:"row",
              justifyContent: "space-between",
              marginRight: 10   
              
            }}>
              <Ionicons name="videocam" size={22} color="white" />
              <MaterialIcons name="call" size={22} color="white" />
              <MaterialCommunityIcons name="dots-vertical" size={22}  color="white" />
            </View>
          ),
          headerBackImage: () =>  <ChatScreenHeader {...route.params}/>,
          title: route.params.name,
          headerTitleStyle: {
            marginLeft: 5,
            fontSize: 18
          }
         })}
        component={ChatScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
