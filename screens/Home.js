import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Platform,
  StatusBar,
  ImageBackground
} from 'react-native';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import Help from './Help';
import Facts from './Facts';
import Chat from './Chat';
import Solutions from './Solutions';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../assets/bgApp.jpg')} style={styles.backgroundImage}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appTitleTextContainer}>
          <Image style={styles.appTitleTextImage}
              source={require('../assets/title.jpg')}></Image>
          </View>
        </View>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Help')}>
          <Text style={styles.routeText}> Helpers</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>1</Text>
          <Image style={styles.iconImage} source={require('../assets/parents.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeCard1}
          onPress={() => this.props.navigation.navigate('Solutions')}>
          <Text style={styles.routeText}>Solutions</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>2</Text>
          <Image style={styles.iconImage1} source={require('../assets/phoneAnimated.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate('Facts')}>
          <Text style={styles.routeText}>Facts</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>3</Text>
          <Image style={styles.iconImage1} source={require('../assets/facts.png')}></Image>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeCard1}
          onPress={() => this.props.navigation.navigate('Chat')}>
          <Text style={styles.routeText}>Chat</Text>
          <Text style={styles.knowMore}>{'Know More --->'}</Text>
          <Text style={styles.bgDigit}>4</Text>
          <Image style={styles.iconImage1} source={require('../assets/chat.png')}></Image>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#C8F1F0'
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
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    position: "absolute",
        marginLeft:400,
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: 40,
        top:-20
  },
  iconImage1: {
    position: "absolute",
        marginLeft:400,
        height: 120,
        width: 200,
        resizeMode: "contain",
        right: 40,
        top:-20
  },
  iconImage3: {
    position: "absolute",
        marginLeft:400,
        height: 100,
        width: 200,
        resizeMode: "contain",
        right: 40,
        top:-10
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleTextImage: {
    height:50,
    width:300,
    marginLeft:10,
    marginBottom:10
     },
  routeCard: {
        flex: 0.25,
        marginLeft: 40,
        marginRight: 50,
        marginTop:10,
        borderRadius: 30,
        backgroundColor: '#f9decd'
    },
    routeCard1: {
        flex: 0.25,
        marginLeft: 40,
        marginRight: 50,
        marginTop:10,
        borderRadius: 30,
        backgroundColor: '#fff9ba'
    },
  routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30,
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 120,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
});
