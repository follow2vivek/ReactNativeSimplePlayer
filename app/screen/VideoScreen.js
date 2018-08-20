import React, { Component } from "react";
import { View, StyleSheet, Text, BackHandler, TouchableOpacity, Alert, WebView, Platform } from "react-native";
import YouTube from 'react-native-youtube'
import Colors from "../utils/Colors";
import Constant from "../utils/Constant";


export default class VideoScreen extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.channelName,
    }
  };
  handleBackButtonClick() {
    navigate.pop();
  }
  render() {
    const { state, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.webViewContainer}>

          {/* <WebView
            javaScriptEnabled={true}
            domStorageEnabled={true}
            source={{ uri: 'https://www.youtube.com/embed/' + state.params.videoId }}
          /> */}

        <YouTube
          videoId={state.params.videoId}   // The YouTube video ID
          play={true}             // control playback of video with true/false
          fullscreen={false}       // control whether the video should play in fullscreen or inline
          loop={true}             // control whether the video should loop when ended
          apiKey = {Constant.apiKey}
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={styles.youtube}
        />
        </View>
        <View style={styles.body}>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  youtube: {
    alignSelf: 'stretch',
    height:250
  },
  body: {
    
  }

});