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
              WHAT CAN PARENTS?GAURDIAN DO- Talking to your child's teacher or
              the school principal to let them know about the situation.
              Sometimes they're able to create anti-bullying lessons or programs
              for the school, and can take action to help a child in direct
              need. Ask the teacher to keep an eye out in class. She can try
              separating the children or moving their seating positions, which
              can sometimes stop the problem before it gets out of control. If
              your child is being bullied on the school bus, explain this to the
              school and find out if they can monitor the bus in some way to
              catch the bully in the act. If so, the bully could be suspended
              from riding the bus altogether. Get involved in school activities
              to act as a role model for the kids and an extra set of eyes for
              the teacher. If the school isn't taking appropriate action, try
              contacting the school superintendent and State Department of
              Education for help. If the bullying is related to race, color,
              sex, religion or a disability, and you feel the school is not
              addressing your complaint, you could even contact the Civil Rights
              Division.
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
