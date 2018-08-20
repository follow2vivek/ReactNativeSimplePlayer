import React, { Component } from "react";
import { View, StyleSheet, NetInfo, ImageBackground } from "react-native";
import SplashScreen from "react-native-splash-screen";
import HeaderComponent from "../component/HeaderComponent";
import Colors from "../utils/Colors";
import Constant from "../utils/Constant";
import YoutubeRowComponent from "../component/YoutubeRowComponent";

export default class HomeScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: '',
      header:null
    }
  };

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <HeaderComponent />
        <View style={styles.body}>
          <YoutubeRowComponent nav = {navigate}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  netContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  netTxt: {
    fontSize: 18
  },
  body: {
    flex: 1
  }
});
