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
              WHAT CAN A CHILD DO- 
              1.Make direct eye contact with the bully and
              use a calm but firm tone of voice to tell them to stop.
              2.If
              joking comes easy, try humor to shift the energy of the moment.
              3.Don't try to fight the bully. Instead, walk away if possible and
              find an adult to get help.
               4.Tell parents or a trustworthy adult
              about the situation so they can help create a plan to stop it.
              5.Bullies tend to pick on kids when they're alone, so try to stay
              near other children and adults. 
              6.Sit near the front of the school
              bus, or ride the bus with a friend from the neighborhood.
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
