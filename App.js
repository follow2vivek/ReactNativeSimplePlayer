/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import { StackNavigator } from "react-navigation";
import HomeScreen from "./app/screen/HomeScreen";
import VideoScreen from "./app/screen/VideoScreen";

const App = StackNavigator({
     HomeScreen:{screen:HomeScreen},
     VideoScreen:{screen:VideoScreen},
});
export default App;
