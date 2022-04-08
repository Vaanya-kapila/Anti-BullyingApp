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

export default class Solutions extends Component {
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
          <View style={styles.upperContainer}>
            <Text style={styles.routeText}>
              The responsibility to protect children from all forms of abuse,
              including bullying, is the responsibility of parents, teachers,
              and other adults in the community who are in contact with children
              and youth. At home, parents are responsible for their children's
              safety and well-being. Adults in school, on sports teams, and in
              community activities are all responsible for the safety and
              well-being of children and youth in their care. By promoting
              healthy relationships, we can prevent bullying and support
              children and youth in developing social skills, understanding and
              respect, social responsibility, and citizenship.
            </Text>
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
  appIcon: {
    flex: 0.3,
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
  iconImage1: {
    position: 'absolute',
    marginLeft: 400,
    height: 120,
    width: 200,
    resizeMode: 'contain',
    right: 40,
    top: -20,
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
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleTextImage: {
    height: 50,
    width: 300,
    marginLeft: 10,
    marginBottom: 10,
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 40,
    marginRight: 50,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#f9decd',
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
    fontSize: 25,
    //fontWeight: "bold",
    color: 'black',
    marginTop: 25,
    paddingLeft: 30,
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
