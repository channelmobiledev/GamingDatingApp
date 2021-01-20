import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileContainer from './src/components/profile/profile.container';
import MessagesContainer from './src/components/messages/messages.contaner';
import MatchesContainer from './src/components/matches/matches.container';

const Tab = createMaterialBottomTabNavigator();

const AppDefaultTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ff073a',
    background: '#2cf4da',
    card: '#303030',
    text: '#ff0000',
    notification: '#2cf4da',
    backgroundColor: '#ff0000',
    placeholder: '#ff0000',
    underlineColor: '#ff0000',
  },
};

/**
 * Main App
 */
const App = () => {
  /**
   * Main navigation bar at the bottom
   */
  const MainNavigationTabViews = () => {
    /**
     * Render Feed view
     */
    const TabMatches = () => {
      return <MatchesContainer />;
    };

    /**
     * Render Messages view
     */
    const TabMessages = () => {
      return <MessagesContainer />;
    };

    /**
     * Render Profile view
     */
    const TabProfile = () => {
      return <ProfileContainer />;
    };

    /**
     * Navigation Tab Bar view
     */
    return (
      <Tab.Navigator labeled={true} activeColor={'#2cf4da'}>
        <Tab.Screen
          name="Matches"
          component={TabMatches}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="heart-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={TabMessages}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="message-reply-text"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={TabProfile}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="human-greeting"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  /**
   * Render
   */
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={AppDefaultTheme}>
          <MainNavigationTabViews />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

/**
 * Styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
