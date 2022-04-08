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

export default class Heplers extends Component {
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
            <Text style={styles.routeText}>You can get help from:</Text>
          </View>
          <View style={styles.upperContainer}>
            <Text style={styles.routeText}>1.Your parents/guardian</Text>
          </View>
          <View style={styles.upperContainer}>
            <Text style={styles.routeText}>2.Any staff member in office/school</Text>
          </View>
          <View style={styles.upperContainer}>
            <Text style={styles.routeText}>3.A friend</Text>
          </View>
          <View style={styles.upperContainer}>
            <Text style={styles.routeText}>4.Any trusted adult</Text>
          </View>
          <View style={styles.upperContainer}>
            <Text style={styles.routeText}>5.Any relative/associate</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.bottomImage}
              source={require('../assets/people.jpg')}></Image>
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
  bottomImage: {
    height: 100,
    width: 350,
    marginBottom: 10,
  },
  image: {
    height: 70,
    width: 70,
    marginLeft: 10,
    marginBottom: 1,
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
