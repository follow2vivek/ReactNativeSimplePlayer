import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ImageBackground,
  ListView,
  NetInfo,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from "react-native";
import Colors from "../utils/Colors";
import Constant from "../utils/Constant";
import VideoScreen from "../screen/VideoScreen";

const window = Dimensions.get("window");

export default class YoutubeRowComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: [],
      isConnected: false
    };
  }
  componentDidMount() {

    NetInfo.isConnected.addEventListener("connectionChange", isConnected => {
      this.setState({ isConnected: true });
      return fetch(Constant.youtubeListVideoUrl)
        .then(response => response.json())
        .then(responseJson => {
          this.setState(
            {
              isLoading: false,
              dataSource: responseJson.items
            },
            function() {}
          );
          console.log(this.state.dataSource);
        })
        .catch(error => {
          console.error(error);
        });
    });
  }
  
  render() {
    

    if (this.state.isConnected) {
      if (this.state.isLoading) {
        return (
          <View style={styles.loaderContainer}>
            <ActivityIndicator />
          </View>
        );
      }
    } else {
      return (
        <View style={styles.netContainer}>
          <Text style={styles.netTxt}>Check Internet Connections</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <ScrollView style={[styles.scrollView]} removeClippedSubviews={false}>
          {this.state.dataSource.map(data => {
            //  console.log(data.snippet.title);
            return (
              <View style={styles.rowData}>
                <TouchableOpacity
                  onPress={() => this.props.nav('VideoScreen',{videoId:data.id.videoId,channelName:data.snippet.channelTitle})}
                >
                  <ImageBackground
                    source={{ uri: data.snippet.thumbnails.high.url }}
                    resizeMode="cover"
                    style={styles.bgImg}
                  >
                    <View style={styles.bgView} />
                    <Text style={styles.txtTitle} numberOfLines={2}>
                      {data.snippet.title}
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1
  },
  bgImg: {
    width: window.width,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden"
  },
  rowData: {
    overflow: "hidden",
    borderRadius: 10
  },
  bgView: {
    width: window.width,
    height: 180,
    borderRadius: 10,
    backgroundColor: Colors.black,
    overflow: "hidden",
    opacity: 0.5
  },
  txtTitle: {
    bottom: 0,
    left: 0,
    padding: 10,
    color: Colors.white,
    position: "absolute"
  },
  scrollView: {
    flex: 1
  }
});
