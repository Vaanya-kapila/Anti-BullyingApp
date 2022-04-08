import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
} from 'react-native';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/bgApp.jpg')}
          style={styles.backgroundImage}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appTitleTextContainer}>
              <Image
                style={styles.appTitleTextImage}
                source={require('../assets/title.jpg')}></Image>
            </View>
          </View>
          <View>
            <Text style={styles.routeText}>
              It's always good to chat with any person whom you are very close
              to.But if you are shy and do not want to talk to the person
              verbally it is good to write it down or share your with
              anything,it could even be stuff toy or an online bot...I know you
              can do this and you will surely do it.😊😊 For additional help and
              online chat please go to this app's online 
              Chatbot-https://console.dialogflow.com/api-client/demo/embedded/8018a360-958f-4db7-b8da-23c4a0020965
            </Text>
          </View>
          <View>
            <Image
              style={styles.image}
              source={require('../assets/goodLuck.png')}></Image>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8F1F0',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  upperContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    position: 'absolute',
    marginLeft: 400,
    height: 100,
    width: 200,
    resizeMode: 'contain',
    right: 40,
    top: -20,
  },
  image1: {
    height: 20,
    width: 0,
    marginLeft: 10,
    marginBottom: 1,
  },
  iconImage3: {
    position: 'absolute',
    marginLeft: 400,
    height: 100,
    width: 200,
    resizeMode: 'contain',
    right: 40,
    top: -10,
  },
  appTitleTextContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
    height: 500,
  },
  appTitleTextImage: {
    height: 50,
    width: 300,
    marginLeft: 10,
    marginBottom: 10,
  },
  image: {
    height: 300,
    width: 300,
    marginLeft: 10,
    marginBottom: 10,
  },
  bottomImage: {
    height: 100,
    width: 350,
    marginBottom: 10,
  },

  routeCard: {
    flex: 0.25,
    marginLeft: 40,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 30,
  },
  routeCard1: {
    flex: 0.25,
    marginLeft: 40,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#fff9ba',
  },
  routeText: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  },
  knowMore: {
    paddingLeft: 30,
    color: 'red',
    fontSize: 15,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 120,
    right: 20,
    bottom: -15,
    zIndex: -1,
  },
});
